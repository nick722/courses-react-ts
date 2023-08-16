import React from 'react';
import { Author } from '../../../../types';
import AuthorItem from '../AuthorItem';

import './AuthorsList.scss';

interface AuthorsProps {
	buttonText: string;
	authors: Author[];
	title: string;
	onClick: (addedAuthor: Author) => void;
}

const renderAuthorsList = (
	authors: Author[],
	buttonText: string,
	onClick: (author: Author) => void
) => (
	<ul>
		{authors.map((author) => (
			<AuthorItem
				onClick={onClick}
				key={author.id}
				buttonText={buttonText}
				author={author}
			/>
		))}
	</ul>
);

const renderNoAuthorsMessage = () => <p>Authors list is empty</p>;

const AuthorsList = ({ authors, title, buttonText, onClick }: AuthorsProps) => {
	return (
		<div className='authors-list'>
			<h3 className='authors-list__title'>{title}</h3>
			{authors.length
				? renderAuthorsList(authors, buttonText, onClick)
				: renderNoAuthorsMessage()}
		</div>
	);
};

export default AuthorsList;
