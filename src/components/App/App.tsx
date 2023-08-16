import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import CourseForm from '../CourseForm/CourseForm';
import Courses from '../Courses/Courses';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import CourseInfo from '../CourseInfo/CourseInfo';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectCourseDeleteError,
	selectCourses,
} from '../../store/courses/selectors';
import { getCoursesAll } from '../../store/courses/thunks';
import { getAuthorsAll, selectAuthors } from '../../store/authors';
import { AppRoutes } from '../../constants/routes';
import { getUser, selectIsAuth } from '../../store/user';
import { AppDispatch } from '../../store';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { toast, ToastContainer } from 'react-toastify';

function App() {
	const isAuth = useSelector(selectIsAuth);
	console.log('isAuth', isAuth);
	const dispatch: AppDispatch = useDispatch();
	const courses = useSelector(selectCourses);
	const authors = useSelector(selectAuthors);

	const deleteError = useSelector(selectCourseDeleteError);

	useEffect(() => {
		if (deleteError) toast.error(deleteError);
	}, [deleteError]);

	const [showCreateCourse, setShowCreateCourse] = useState(false);

	useEffect(() => {
		dispatch(getUser());
		dispatch(getAuthorsAll());
		dispatch(getCoursesAll());
	}, []);

	return (
		<div className='App'>
			<Routes>
				<Route path={AppRoutes.HOME} element={<Header />}>
					<Route path={AppRoutes.REGISTRATION} element={<Registration />} />
					<Route path={AppRoutes.LOGIN} element={<Login />} />
					<Route
						path={AppRoutes.COURSE_INFO}
						element={
							<PrivateRoute>
								<CourseInfo courses={courses} allAuthors={authors} />
							</PrivateRoute>
						}
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
						element={
							<PrivateRoute>
								<CourseForm allAuthors={authors} />
							</PrivateRoute>
						}
					/>
					<Route path='/' element={<Navigate to={AppRoutes.LOGIN} replace />} />
				</Route>
			</Routes>
			<ToastContainer
				position='top-right'
				autoClose={2000}
				hideProgressBar={true}
				closeOnClick
				theme='colored'
			/>
		</div>
	);
}

export default App;
