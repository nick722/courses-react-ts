import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Courses from './components/Courses/Courses';

import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthors, selectCourses } from './store/selectors';
import getAuthors from './store/authors/thunk';
import getCourses from './store/courses/thunk';

function App() {
	const dispatch = useDispatch();
	const courses = useSelector(selectCourses);
	const authors = useSelector(selectAuthors);

	const [showCreateCourse, setShowCreateCourse] = useState(false);

	useEffect(() => {
		dispatch(getAuthors());
		dispatch(getCourses());
	}, []);

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route
						path='/courses/:courseId'
						element={<CourseInfo courses={courses} allAuthors={authors} />}
					/>
					<Route
						path='/courses'
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
						path='/courses/add'
						element={<CreateCourse allAuthors={authors} />}
					/>
					<Route path='/' element={<Navigate to='/courses' replace />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
