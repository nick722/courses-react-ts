import React from 'react';
import Button from '../../common/Button/Button';

import './AuthorItem.scss';

import { Author } from '../../../types';

interface AuthorItemProps {
	author: Author;
	buttonText: string;
	onClick: (author: Author) => any;
}

const AuthorItem = ({ author, buttonText, onClick }: AuthorItemProps) => {
	return (
		<div className='author-item'>
			<span>{author.name}</span>
			<Button withText type='button' onClick={() => onClick(author)}>
				{buttonText}
			</Button>
		</div>
	);
};

export default AuthorItem;
