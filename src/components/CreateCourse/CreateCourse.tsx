import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

import AuthorsList from './components/AuthorsList/AuthorsList';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import Duration from './Duration/Duration';

import { Author, Course } from '../../types';

import './CreateCourse.scss';
import formatCreationDate from '../../helpers/formatCreationDate';

const TITLE = 'Title';
const TITLE_PLACEHODER = 'Enter title...';
const CREATE_COURSE = 'Create course';
const DESCRIPTION_PLACEHOLDER = 'Enter description';
const ADD_AUTHOR_TEXT = 'Add author';
const DELETE_AUTHOR_TEXT = 'Delete author';

const forbiddenSymbols = /[@#$%^&]/;

interface CreateCourseProps {
	authors: Author[];
	setCourses(): (value: any) => void;
}

const CreateCourse = ({ authors, setCourses }: CreateCourseProps) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [allAuthors, setAllAuthors] = useState(authors);
	const [courseAuthors, setCourseAuthors] = useState([]);

	const addAuthor = (addedAuthor) => {
		setAllAuthors([
			...allAuthors.filter((author) => author.id !== addedAuthor.id),
		]);
		setCourseAuthors([...courseAuthors, addedAuthor]);
	};

	const createAuthor = (authorsName) => {
		const author = { id: uuid(), name: authorsName };
		setAllAuthors([...allAuthors, author]);
	};

	const deleteAuthor = (deletedAuthor) => {
		setCourseAuthors([
			...courseAuthors.filter((author) => author.id !== deletedAuthor.id),
		]);
		setAllAuthors([...allAuthors, deletedAuthor]);
	};

	const handleTitleChange = (value: string) => {
		if (!forbiddenSymbols.test(value)) {
			setTitle(value);
		}
	};

	const handleSubmit = (event): Course => {
		event.preventDefault();
		// console.log('event.target.title.value', event.target.title.value);

		const newCourse = {
			id: uuid(),
			title: event.target.title?.value,
			description: event.target.description?.value,
			creationDate: formatCreationDate(new Date().toLocaleDateString()),
			duration: Number(event.target.duration?.value),
			authors: event.target.courseAuthors?.value,
		};

		console.log('newCourse', newCourse);
		return newCourse;
	};

	return (
		<form onSubmit={handleSubmit} className='create-course'>
			<div className='create-course__header'>
				<Input
					name='title'
					value={title}
					className='create-course__input'
					labelText={TITLE}
					placeholderText={TITLE_PLACEHODER}
					onChange={handleTitleChange}
				/>
				<Button
					className='create-course__header-button'
					buttonText={CREATE_COURSE}
					type='submit'
				/>
			</div>
			<div className='create-course__description'>
				<label for='textarea'>Description</label>
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
						authors={allAuthors}
						buttonText={ADD_AUTHOR_TEXT}
						onClick={addAuthor}
					/>
					<AuthorsList
						title='Course Authors'
						name='courseAuthors'
						authors={courseAuthors}
						buttonText={DELETE_AUTHOR_TEXT}
						onClick={deleteAuthor}
					/>
				</div>
			</div>
		</form>
	);
};

export default CreateCourse;
