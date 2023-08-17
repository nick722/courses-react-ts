import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';

import './Courses.scss';

import { Author, Course } from '../../types';
import getAuthorsById from '../../helpers/getAuthorsById';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../store/user';
import { APP_ROUTES } from '../../constants/routes';

interface CoursesProps {
	courses: Course[];
	allAuthors: Author[];
	toggleShowCreateCourse: () => void;
}

const ADD_NEW_BUTTON_TEXT = 'Add new course';

const Courses = ({ courses, allAuthors }: CoursesProps) => {
	const isAuth = useSelector(selectIsAuth);
	const navigate = useNavigate();

	const navigateToCreateCourses = () => {
		navigate(APP_ROUTES.CREATE_COURSE);
	};

	if (!isAuth) {
		navigate(APP_ROUTES.LOGIN);
	}

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
				<Button withText onClick={navigateToCreateCourses}>
					{ADD_NEW_BUTTON_TEXT}
				</Button>
			</div>
			{renderCourses(courses)}
		</div>
	);
};

export default Courses;
