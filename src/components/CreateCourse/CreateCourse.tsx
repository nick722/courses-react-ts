import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

import './CreateCourse.scss';
import AuthorItem from './components/AuthorItem';
import Authors from './components/Authors/Authors';
import { Author } from '../../types';

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
			<Authors authors={authors} />
			<div>
				Course authors - contains a list of authors course and their
				corresponding Delete author buttons
			</div>
			<div>Create author </div>
		</div>
	);
};

export default CreateCourse;
