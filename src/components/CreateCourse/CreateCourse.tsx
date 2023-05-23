import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

const TITLE = 'Title';
const PLACEHODER = 'Enter title...';
const CREATE_COURSE = 'Create course';

const CreateCourse = () => {
	return (
		<div>
			<Input
				labelText={TITLE}
				placeholderText={PLACEHODER}
				onChange={() => {
					/**/
				}}
			/>
			<Button
				buttonText={CREATE_COURSE}
				onClick={() => {
					/**/
				}}
			/>
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
