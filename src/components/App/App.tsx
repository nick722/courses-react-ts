import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import CourseForm from '../CourseForm/CourseForm';
import Courses from '../Courses/Courses';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
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
import { APP_ROUTES } from '../../constants/routes';
import { getUser, selectIsAuth } from '../../store/user';
import { AppDispatch } from '../../store';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { toast, ToastContainer } from 'react-toastify';
import { getBearerToken } from '../../helpers/getBearerToken';
import { token } from '../../constants/locatStorageItems';

function App() {
	const isAuth = useSelector(selectIsAuth);
	const dispatch: AppDispatch = useDispatch();

	const deleteError = useSelector(selectCourseDeleteError);
	const navigate = useNavigate();

	// const bearerToken = getBearerToken();
	// if (bearerToken) {
	// 	dispatch(getUser());
	// }

	useEffect(() => {
		if (deleteError) toast.error(deleteError);
	}, [deleteError]);

	const [showCreateCourse, setShowCreateCourse] = useState(false);

	useEffect(() => {
		dispatch(getUser());
		dispatch(getAuthorsAll());
		dispatch(getCoursesAll());
	}, []);

	useEffect(() => {
		if (!isAuth) {
			navigate(APP_ROUTES.LOGIN);
		}
	}, []);

	return (
		<div className='App'>
			<Routes>
				<Route path={APP_ROUTES.HOME} element={<Header />}>
					<Route path={APP_ROUTES.REGISTRATION} element={<Registration />} />
					<Route path={APP_ROUTES.LOGIN} element={<Login />} />
					<Route
						path={APP_ROUTES.COURSE_INFO}
						element={
							<PrivateRoute>
								<CourseInfo />
							</PrivateRoute>
						}
					/>
					<Route
						path={APP_ROUTES.COURSES}
						element={
							<Courses
								toggleShowCreateCourse={() => {
									setShowCreateCourse(!showCreateCourse);
								}}
							/>
						}
					/>
					<Route
						path={APP_ROUTES.CREATE_COURSE}
						element={
							<PrivateRoute>
								<CourseForm />
							</PrivateRoute>
						}
					/>
					<Route
						path={`${APP_ROUTES.UPDATE_COURSE}:courseId`}
						element={
							<PrivateRoute>
								<CourseForm />
							</PrivateRoute>
						}
					/>
					<Route
						path='/'
						element={<Navigate to={APP_ROUTES.LOGIN} replace />}
					/>
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
