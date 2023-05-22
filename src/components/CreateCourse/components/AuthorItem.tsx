import React from 'react';
import Button from '../../common/Button/Button';

interface AuthorItemProps {
	authorsName: string;
}

const buttonText = 'Add author';
const AuthorItem = ({ authorsName }: AuthorItemProps) => {
	return (
		<div>
			<span>{authorsName}</span>
			<Button
				buttonText={buttonText}
				onClick={() => {
					/*do nothing*/
				}}
			/>
		</div>
	);
};

export default AuthorItem;
