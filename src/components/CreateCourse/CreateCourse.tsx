import React, { useState } from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

import AuthorsList from './components/AuthorsList/AuthorsList';
import AddAuthor from './components/CreateAuthor/CreateAuthor';
import Duration from './Duration/Duration';

import { Author } from '../../types';

import './CreateCourse.scss';
import { set } from 'husky';

const TITLE = 'Title';
const TITLE_PLACEHODER = 'Enter title...';
const CREATE_COURSE = 'Create course';
const DESCRIPTION_PLACEHOLDER = 'Enter description';
const ADD_AUTHOR_TEXT = 'Add author';
const DELETE_AUTHOR_TEXT = 'Delete author';

const forbiddenSymbols = /[@#$%^&]/;

interface CreateCourseProps {
	authors: Author[];
}

const CreateCourse = ({ authors }: CreateCourseProps) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [allAuthors, setAllAuthors] = useState(authors);
	const [courseAuthors, setCourseAuthors] = useState([]);

	console.log('courseAuthors', courseAuthors);

	const addAuthor = (author) => setCourseAuthors([...courseAuthors, author]);
	const deleteAuthor = (author) => setAllAuthors([...allAuthors, author]);

	const handleTitleChange = (value: string) => {
		if (!forbiddenSymbols.test(value)) {
			setTitle(value);
		}
	};

	return (
		<form className='create-course'>
			<div className='create-course__header'>
				<Input
					value={title}
					className='create-course__input'
					labelText={TITLE}
					placeholderText={TITLE_PLACEHODER}
					onChange={({ target }) => handleTitleChange(target.value)}
				/>
				<Button
					className='create-course__header-button'
					buttonText={CREATE_COURSE}
					onClick={() => {
						/**/
					}}
				/>
			</div>
			<div className='create-course__description'>
				<label for='textarea'>Description</label>
				<textarea
					value={description}
					onChange={({ target }) => setDescription(target.value)}
					id='textarea'
					placeholder={DESCRIPTION_PLACEHOLDER}
				/>
			</div>
			<div className='create-course__main'>
				<div className='create-course__left-panel'>
					<AddAuthor />
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
