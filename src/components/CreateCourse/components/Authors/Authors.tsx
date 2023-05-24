import React from 'react';
import { Author } from '../../../../types';
import AuthorItem from '../AuthorItem';

import './Authors.scss';

interface AuthorsProps {
	authors: Author[];
}

const Authors = ({ authors }: AuthorsProps) => {
	return (
		<div className='authors'>
			<h3 className='authors__title'>Authors</h3>
			<ul>
				{authors.map((author) => (
					<AuthorItem authorsName={author.name} />
				))}
			</ul>
		</div>
	);
};

export default Authors;
