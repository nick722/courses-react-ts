import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import CourseForm from '../CourseForm/CourseForm';
import Courses from '../Courses/Courses';

import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import CourseInfo from '../CourseInfo/CourseInfo';
import { useDispatch, useSelector } from 'react-redux';
import { selectCourses } from '../../store/courses/selectors';
import getCourses from '../../store/courses/thunk';
import { getAuthors, selectAuthors } from '../../store/authors';
import { AppRoutes } from '../../constants/routes';
import { getUser, selectIsAuth } from '../../store/user';
import { AppDispatch } from '../../store';

function App() {
	const isAuth = useSelector(selectIsAuth);
	console.log('isAuth', isAuth);
	const dispatch: AppDispatch = useDispatch();
	const courses = useSelector(selectCourses);
	const authors = useSelector(selectAuthors);

	const [showCreateCourse, setShowCreateCourse] = useState(false);

	useEffect(() => {
		dispatch(getUser());
		dispatch(getAuthors());
		dispatch(getCourses());
	}, []);

	return (
		<div className='App'>
			<Routes>
				<Route path={AppRoutes.HOME} element={<Header />}>
					<Route path={AppRoutes.REGISTRATION} element={<Registration />} />
					<Route path={AppRoutes.LOGIN} element={<Login />} />
					<Route
						path={AppRoutes.COURSE_INFO}
						element={<CourseInfo courses={courses} allAuthors={authors} />}
					/>
					<Route
						path={AppRoutes.COURSES}
						element={
							<Courses
								toggleShowCreateCourse={() => {
									setShowCreateCourse(!showCreateCourse);
								}}
								courses={courses}
								allAuthors={authors}
							/>
						}
					/>
					<Route
						path={AppRoutes.CREATE_COURSE}
						element={<CourseForm allAuthors={authors} />}
					/>
					<Route path='/' element={<Navigate to={AppRoutes.LOGIN} replace />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
