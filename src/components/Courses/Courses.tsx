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

const Courses = ({
	courses,
	allAuthors,
	toggleShowCreateCourse,
}: CoursesProps) => {
	const navigate = useNavigate();
	const navigateToCreateCourses = () => {
		navigate('/courses/add');
	};

	console.log('courses in Courses', courses);

	const renderCourses = (courses: Course[]) => {
		console.log('courses', courses);
		return courses.map((course) => (
			<CourseCard
				id={course.id}
				key={course.id}
				title={course.title}
				description={course.description}
				authors={getAuthorsById(course.authors, allAuthors)}
				duration={course.duration}
				creationDate={course.creationDate}
			/>
		));
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
