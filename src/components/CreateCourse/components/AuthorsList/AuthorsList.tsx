import React from 'react';
import { Author } from '../../../../types';
import AuthorItem from '../AuthorItem';

import './AuthorsList.scss';

interface AuthorsProps {
	authors: Author[];
	title: string;
}

const renderAuthorsList = (authors: Author[]) => (
	<ul>
		{authors.map((author) => (
			<AuthorItem authorsName={author.name} />
		))}
	</ul>
);

const renderNoAuthorsMessage = () => <p>Authors list is empty</p>;

const AuthorsList = ({ authors, title }: AuthorsProps) => {
	return (
		<div className='authors-list'>
			<h3 className='authors-list__title'>{title}</h3>
			{authors.length ? renderAuthorsList(authors) : renderNoAuthorsMessage()}
		</div>
	);
};

export default AuthorsList;
