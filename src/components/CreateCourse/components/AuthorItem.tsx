import React from 'react';
import Button from '../../common/Button/Button';

import './AuthorItem.scss';

interface AuthorItemProps {
	authorsName: string;
}

const buttonText = 'Add author';

const AuthorItem = ({ authorsName }: AuthorItemProps) => {
	return (
		<div className='author-item'>
			<span>{authorsName}</span>
			<Button
				type='button'
				buttonText={buttonText}
				onClick={() => {
					/*do nothing*/
				}}
			/>
		</div>
	);
};

export default AuthorItem;
