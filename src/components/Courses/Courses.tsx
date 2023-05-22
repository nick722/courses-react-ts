import React, { FC, useState } from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';

import './Courses.scss';

interface Course {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
}
interface Author {
	id: string;
	name: string;
}
interface CoursesProps {
	courses: Course[];
	authors: Author[];
}

const ADD_NEW_BUTTON_TEXT = 'Add new course';

const formatDuration = (duration) => {
	return duration;
};

const Courses = ({ courses, authors }: CoursesProps) => {
	const [showCreateCourse, setShowCreateCourse] = useState(false);

	const getAuthors = (courseAuthorsIds: string[]): string =>
		courseAuthorsIds
			.map((courseAuthorId) =>
				authors
					.filter((author) => {
						return author.id === courseAuthorId;
					})
					.map((authObj) => authObj.name)
			)
			.join(', ');

	const renderCourses = (courses: Course[]) =>
		courses.map((course) => (
			<CourseCard
				key={course.id}
				title={course.title}
				description={course.description}
				authors={getAuthors(course.authors)}
				duration={formatDuration(course.duration)}
				creationDate={course.creationDate}
			/>
		));

	return (
		<div className={'courses'}>
			<div className={'courses__search-bar-panel'}>
				<SearchBar />
				<Button
					buttonText={ADD_NEW_BUTTON_TEXT}
					onClick={() => {
						setShowCreateCourse(!showCreateCourse);
					}}
				/>
			</div>
			{renderCourses(courses)}
		</div>
	);
};

export default Courses;
