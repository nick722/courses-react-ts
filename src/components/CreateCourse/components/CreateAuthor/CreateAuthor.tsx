import React from 'react';

import './CreateAuthor.scss';
import Input from '../../../common/Input/Input';
import Button from '../../../common/Button/Button';

const INPUT_TEXT = 'Author name';
const INPUT_PLACEHOLDER = 'Enter author name...';
const BUTTON_TEXT = 'Create author';

const CreateAuthor = () => {
	return (
		<div className='create-author'>
			<h3>Create author</h3>
			<Input
				labelText={INPUT_TEXT}
				placeholderText={INPUT_PLACEHOLDER}
				onChange={() => {
					/**/
				}}
			/>
			<Button
				buttonText={BUTTON_TEXT}
				onClick={() => {
					/**/
				}}
			/>
		</div>
	);
};

export default CreateAuthor;
