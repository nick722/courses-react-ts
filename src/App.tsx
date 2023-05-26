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
	const [allAuthors, setAllAuthors] = useState(mockedAuthorsList);

	console.log('allAuthors in App', allAuthors);

	const addNewAuthor = (newAuthor) => {
		setAllAuthors([...allAuthors, newAuthor]);
	};

	const addNewCourse = (newCourse) => {
		setCourses([...courses, newCourse]);
	};

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route path='/registration' element={<Registration />} />
					<Route path='/login' element={<Login />} />
					<Route path='/courses/:courseId' element={<CourseInfo />} />
					<Route
						path='/courses'
						element={
							<Courses
								toggleShowCreateCourse={() => {
									setShowCreateCourse(!showCreateCourse);
								}}
								courses={courses}
								allAuthors={allAuthors}
							/>
						}
					/>
					<Route
						path='/courses/add'
						element={
							<CreateCourse
								addNewAuthor={addNewAuthor}
								addNewCourse={addNewCourse}
								allAuthors={allAuthors}
							/>
						}
					/>
				</Route>
				<Route path='*' element={<Navigate to='/registration' />} />
			</Routes>
		</div>
	);
}

export default App;
