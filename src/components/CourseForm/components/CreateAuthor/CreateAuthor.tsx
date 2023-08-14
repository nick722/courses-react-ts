import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './CreateAuthor.scss';
import Input from '../../../common/Input/Input';
import Button from '../../../common/Button/Button';
import { Author } from '../../../../types';

const INPUT_TEXT = 'Author name';
const INPUT_PLACEHOLDER = 'Enter author name...';
const BUTTON_TEXT = 'Create author';

interface CreateAuthorProps {
	author: Author;
}

const CreateAuthor = ({ createAuthor }: CreateAuthorProps) => {
	const [authorsName, setAuthorsName] = useState('');

	return (
		<div className='create-author'>
			<h3>Create author</h3>
			<Input
				labelText={INPUT_TEXT}
				placeholderText={INPUT_PLACEHOLDER}
				value={authorsName}
				onChange={setAuthorsName}
			/>
			<Button
				type='button'
				buttonText={BUTTON_TEXT}
				onClick={() => {
					setAuthorsName('');
					createAuthor(authorsName);
				}}
			/>
		</div>
	);
};

export default CreateAuthor;