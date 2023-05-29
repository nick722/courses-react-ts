import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Author, Course } from '../../types';
import getAuthorsById from '../../helpers/getAuthorsById';

import './CourseInfo.scss';
import formatCourseDuration from '../../helpers/formatCourseDuration';

interface CourseInfoProps {
	courses: Course[];
	allAuthors: Author[];
}

const CourseInfo = ({ courses, allAuthors }: CourseInfoProps) => {
	const { courseId } = useParams();
	const course = courses.find((course) => course.id === courseId);

	return (
		<div className='course-info'>
			<Link className='course-info__back-to-courses-link' to='/courses'>
				&lt; Back to courses
			</Link>
			<h1>{course.title}</h1>
			<div className='course-info__main'>
				<div className='course-info__left-side'>
					<p>{course.description}</p>
				</div>
				<div className='course-info__right-side'>
					<p>
						<span className='course-info__label'>ID: </span> {course.id}
					</p>
					<p>
						<span className='course-info__label'>Duration: </span>
						{formatCourseDuration(course.duration)}
					</p>
					<p>
						<span className='course-info__label'>Created: </span>
						{course.creationDate}
					</p>
					<p>
						<span className='course-info__label'>Authors: </span>

						{getAuthorsById(course.authors, allAuthors)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
