import React from 'react';
import { Author } from '../../../../types';
import AuthorItem from '../AuthorItem';

import './AuthorsList.scss';

interface AuthorsProps {
	authors: Author[];
	title: string;
}

const renderAuthorsList = (authors: Author[], buttonText: string) => (
	<ul>
		{authors.map((author) => (
			<AuthorItem
				key={author.id}
				buttonText={buttonText}
				authorsName={author.name}
			/>
		))}
	</ul>
);

const renderNoAuthorsMessage = () => <p>Authors list is empty</p>;

const AuthorsList = ({ authors, title, buttonText }: AuthorsProps) => {
	return (
		<div className='authors-list'>
			<h3 className='authors-list__title'>{title}</h3>
			{authors.length
				? renderAuthorsList(authors, buttonText)
				: renderNoAuthorsMessage()}
		</div>
	);
};

export default AuthorsList;
