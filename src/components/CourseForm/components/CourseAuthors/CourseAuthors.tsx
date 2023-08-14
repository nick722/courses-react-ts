import React from 'react';

import './CourseAuthors.scss';

import { Author } from '../../../../types';

interface CourseAuthorsProps {
	authors: Author[];
}

const CourseAuthors = ({ authors }: CourseAuthorsProps) => {
	return (
		<div className='course-authors'>
			<h3>Course Authors</h3>
			<p>Authors list is empty</p>
		</div>
	);
};

export default CourseAuthors;
