import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

import './CreateCourse.scss';

const TITLE = 'Title';
const PLACEHODER = 'Enter title...';
const CREATE_COURSE = 'Create course';

const CreateCourse = () => {
	return (
		<div className='create-course'>
			<div className='create-course__header'>
				<Input
					labelText={TITLE}
					placeholderText={PLACEHODER}
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
			<div>Description (textarea)</div>
			<div>List of authors</div>
			<div>
				Course authors - contains a list of authors course and their
				corresponding Delete author buttons
			</div>
			<div>Create author </div>
		</div>
	);
};

export default CreateCourse;
