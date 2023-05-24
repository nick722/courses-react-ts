import React, { useState } from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

import Authors from './components/Authors/Authors';
import CourseAuthors from './components/CourseAuthors/CourseAuthors';
import AddAuthor from './components/CreateAuthor/CreateAuthor';
import Duration from './Duration/Duration';

import { Author } from '../../types';

import './CreateCourse.scss';

const TITLE = 'Title';
const TITLE_PLACEHODER = 'Enter title...';
const CREATE_COURSE = 'Create course';
const DESCRIPTION_PLACEHOLDER = 'Enter description';

interface CreateCourseProps {
	authors: Author[];
}

const CreateCourse = ({ authors }: CreateCourseProps) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	return (
		<form className='create-course'>
			<div className='create-course__header'>
				<Input
					value={title}
					className='create-course__input'
					labelText={TITLE}
					placeholderText={TITLE_PLACEHODER}
					onChange={({ target }) => setTitle(target.value)}
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
					<Authors authors={authors} />
					<CourseAuthors />
				</div>
			</div>
		</form>
	);
};

export default CreateCourse;
