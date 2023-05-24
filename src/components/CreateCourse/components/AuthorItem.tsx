import React from 'react';
import Button from '../../common/Button/Button';

import './AuthorItem.scss';

interface AuthorItemProps {
	authorsName: string;
	buttonText: string;
	onClick: () => any;
}

const AuthorItem = ({ authorsName, buttonText, onClick }: AuthorItemProps) => {
	return (
		<div className='author-item'>
			<span>{authorsName}</span>
			<Button type='button' buttonText={buttonText} onClick={onClick} />
		</div>
	);
};

export default AuthorItem;
