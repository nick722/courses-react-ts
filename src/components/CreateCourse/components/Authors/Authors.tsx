import React from 'react';
import { Author } from '../../../../types';
import AuthorItem from '../AuthorItem';

interface AuthorsProps {
	authors: Author[];
}

const Authors = ({ authors }: AuthorsProps) => {
	return (
		<ul>
			{authors.map((author) => (
				<AuthorItem authorsName={author.name} />
			))}
		</ul>
	);
};

export default Authors;
