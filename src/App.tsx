import React, { useState } from 'react';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Courses from './components/Courses/Courses';

import './App.css';

import { mockedCoursesList } from './constants/mockedCoursesList.js';
import { mockedAuthorsList } from './constants/mockedAuthorsList.js';

function App() {
	const [showCreateCourse, setShowCreateCourse] = useState(false);
	const [courses, setCourses] = useState(mockedCoursesList);

	return (
		<div className='App'>
			<Header />
			{showCreateCourse ? (
				<CreateCourse setCourses={setCourses} authors={mockedAuthorsList} />
			) : (
				<Courses
					toggleShowCreateCourse={() => {
						console.log('toggleShowCreateCourse!!');
						setShowCreateCourse(!showCreateCourse);
					}}
					courses={courses}
					authors={mockedAuthorsList}
				/>
			)}
		</div>
	);
}

export default App;
