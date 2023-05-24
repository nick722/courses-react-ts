import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

import Authors from './components/Authors/Authors';
import CourseAuthors from './components/CourseAuthors/CourseAuthors';
import AddAuthor from './components/CreateAuthor/CreateAuthor';

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
	return (
		<div className='create-course'>
			<div className='create-course__header'>
				<Input
					labelText={TITLE}
					placeholderText={TITLE_PLACEHODER}
					onChange={() => {
						/**/
					}}
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
				<textarea id='textarea' placeholder={DESCRIPTION_PLACEHOLDER} />
			</div>
			<div className='create-course__main'>
				<div className='create-course__left-panel'>
					<AddAuthor />
				</div>
				<div className='create-course__right-panel'>
					<Authors authors={authors} />
					<CourseAuthors />
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
