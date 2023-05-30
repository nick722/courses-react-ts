import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';

import './Courses.scss';

import { Author, Course } from '../../types';
import getAuthorsById from '../../helpers/getAuthorsById';

interface CoursesProps {
	courses: Course[];
	allAuthors: Author[];
	toggleShowCreateCourse: () => void;
}

const ADD_NEW_BUTTON_TEXT = 'Add new course';

const Courses = ({ courses, allAuthors }: CoursesProps) => {
	const navigate = useNavigate();
	const navigateToCreateCourses = () => {
		navigate('/courses/add');
	};

	const renderCourses = (courses: Course[]) => {
		return courses.map((course) => {
			const authorsById = getAuthorsById(course.authors, allAuthors);

			return (
				<CourseCard
					id={course.id}
					key={course.id}
					title={course.title}
					description={course.description}
					authorsNames={getAuthorsById(course.authors, allAuthors)}
					duration={course.duration}
					creationDate={course.creationDate}
				/>
			);
		});
	};

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
