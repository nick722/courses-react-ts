import React from 'react';
import Header from './components/Header/Header';

import './App.css';
import Courses from './components/Courses/Courses';

import { mockedCoursesList } from './constants/mockedCoursesList.js';
import { mockedAuthorsList } from './constants/mockedAuthorsList.js';

function App() {
	return (
		<div className='App'>
			<Header />
			<Courses courses={mockedCoursesList} authors={mockedAuthorsList} />
		</div>
	);
}

export default App;
