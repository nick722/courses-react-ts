import React, { useState } from 'react';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Courses from './components/Courses/Courses';

import './App.css';

import { mockedCoursesList } from './constants/mockedCoursesList.js';
import { mockedAuthorsList } from './constants/mockedAuthorsList.js';
import { Navigate, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';

function App() {
	const [showCreateCourse, setShowCreateCourse] = useState(false);
	const [courses, setCourses] = useState(mockedCoursesList);

	return (
		<div className='App'>
			<Routes>
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route
					path='/courses'
					element={
						<Courses
							toggleShowCreateCourse={() => {
								console.log('toggleShowCreateCourse!!');
								setShowCreateCourse(!showCreateCourse);
							}}
							courses={courses}
							authors={mockedAuthorsList}
						/>
					}
				/>
				<Route
					path='/courses/add'
					element={
						<CreateCourse setCourses={setCourses} authors={mockedAuthorsList} />
					}
				/>
				<Route path='*' element={<Navigate to='./courses' />} />
			</Routes>
			{/*<Header />*/}
			{/*{showCreateCourse ? (*/}

			{/*) : (*/}

			{/*)}*/}
		</div>
	);
}

export default App;
