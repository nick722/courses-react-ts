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
import { selectIsAdmin } from '../../store/user/selectors';
import { selectCourses } from '../../store/courses/selectors';
import { selectAuthors } from '../../store/authors';

interface CoursesProps {
	toggleShowCreateCourse: () => void;
}

const ADD_NEW_COURSE = 'Add new course';

const Courses = ({ toggleShowCreateCourse }: CoursesProps) => {
	const courses = useSelector(selectCourses);

	const isAuth = useSelector(selectIsAuth);
	const isAdmin = useSelector(selectIsAdmin);
	const navigate = useNavigate();

	const navigateToCreateCourses = () => {
		navigate(APP_ROUTES.CREATE_COURSE);
	};

	if (!isAuth) {
		navigate(APP_ROUTES.LOGIN);
	}

	const renderCourses = (courses: Course[]) => {
		return courses.map((course) => {
			return (
				<CourseCard
					id={course.id}
					key={course.id}
					title={course.title}
					description={course.description}
					authorsIds={course.authors}
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
				{isAdmin && (
					<Button withText onClick={navigateToCreateCourses}>
						{ADD_NEW_COURSE}
					</Button>
				)}
			</div>
			{renderCourses(courses)}
		</div>
	);
};

export default Courses;
