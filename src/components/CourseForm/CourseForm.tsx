import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

import AuthorsList from './components/AuthorsList/AuthorsList';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import Duration from './Duration/Duration';

import { Author, Course } from '../../types';

import './CourseForm.scss';
import formatCreationDate from '../../helpers/formatCreationDate';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCourseFulfilled } from '../../store/courses/actions';
import { addAuthor } from '../../store/authors/authorsSlice';
import { addCourse } from '../../store/courses/thunks';
import { AppDispatch } from '../../store';

const TITLE = 'Title';
const TITLE_PLACEHODER = 'Enter title...';
const CREATE_COURSE = 'Create course';
const DESCRIPTION_PLACEHOLDER = 'Enter description';
const ADD_AUTHOR_TEXT = 'Add author';
const DELETE_AUTHOR_TEXT = 'Delete author';

const forbiddenSymbols = /[@#$%^&]/;

interface CreateCourseProps {
	allAuthors: Author[];
	// addNewCourse(course: Course): (value: any) => void;
}

const CourseForm = ({ allAuthors }: CreateCourseProps) => {
	const dispatch: AppDispatch = useDispatch();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [idleAuthors, setIdleAuthors] = useState<Author[]>(allAuthors);
	const [courseAuthors, setCourseAuthors] = useState<Author[]>([]);

	const navigate = useNavigate();

	const addAuthorToCourse = (addedAuthor) => {
		setIdleAuthors([
			...idleAuthors.filter((author) => author.id !== addedAuthor.id),
		]);
		setCourseAuthors([...courseAuthors, addedAuthor]);
	};

	const createAuthor = (authorsName: string) => {
		const author = { name: authorsName, id: uuid() };
		setIdleAuthors([...idleAuthors, author]);
		// dispatch(addAuthorAction(author));
		dispatch(addAuthor(author));
	};

	const deleteAuthorFromCourse = (deletedAuthor) => {
		setCourseAuthors([
			...courseAuthors.filter((author) => author.id !== deletedAuthor.id),
		]);
		setIdleAuthors([...idleAuthors, deletedAuthor]);
	};

	const handleTitleChange = (value: string) => {
		if (!forbiddenSymbols.test(value)) {
			setTitle(value);
		}
	};

	const createNewCourse = (event): Course => {
		event.preventDefault();

		const newCourse = {
			id: uuid(),
			title: event.target.title?.value,
			description: event.target.description?.value,
			creationDate: formatCreationDate(new Date().toLocaleDateString()),
			duration: Number(event.target.duration?.value),
			authors: courseAuthors.map((author) => author.id),
		};

		navigate('/courses');
		return newCourse;
	};

	const addNewCourse = (course) => {
		dispatch(addCourse(course));
	};

	return (
		<form
			onSubmit={(event) => addNewCourse(createNewCourse(event))}
			className='create-course'
		>
			<div className='create-course__header'>
				<Input
					name='title'
					value={title}
					className='create-course__input'
					labelText={TITLE}
					placeholderText={TITLE_PLACEHODER}
					onChange={handleTitleChange}
				/>
				<Button withText className='create-course__header-button' type='submit'>
					{CREATE_COURSE}
				</Button>
			</div>
			<div className='create-course__description'>
				<label htmlFor='textarea'>Description</label>
				<textarea
					name='description'
					value={description}
					onChange={({ target }) => setDescription(target.value)}
					id='textarea'
					placeholder={DESCRIPTION_PLACEHOLDER}
				/>
			</div>
			<div className='create-course__main'>
				<div className='create-course__left-panel'>
					<CreateAuthor createAuthor={createAuthor} />
					<Duration />
				</div>
				<div className='create-course__right-panel'>
					<AuthorsList
						title='Authors'
						authors={idleAuthors}
						buttonText={ADD_AUTHOR_TEXT}
						onClick={addAuthorToCourse}
					/>
					<AuthorsList
						title='Course Authors'
						authors={courseAuthors}
						buttonText={DELETE_AUTHOR_TEXT}
						onClick={deleteAuthorFromCourse}
					/>
				</div>
			</div>
		</form>
	);
};

export default CourseForm;
