import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';

import './Courses.scss';

import { Author, Course } from '../../types';

interface CoursesProps {
	courses: Course[];
	authors: Author[];
	toggleShowCreateCourse: () => void;
}

const ADD_NEW_BUTTON_TEXT = 'Add new course';

const Courses = ({
	courses,
	authors,
	toggleShowCreateCourse,
}: CoursesProps) => {
	const navigate = useNavigate();

	const navigateToCreateCourses = () => {
		navigate('/courses/add');
	};

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
				duration={course.duration}
				creationDate={course.creationDate}
			/>
		));

	return (
		<div className={'courses'}>
			<div className={'courses__search-bar-panel'}>
				<SearchBar />
				<Button
					buttonText={ADD_NEW_BUTTON_TEXT}
					onClick={navigateToCreateCourses}
				/>
			</div>
			{renderCourses(courses)}
		</div>
	);
};

export default Courses;
