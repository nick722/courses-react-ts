import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';

import './Courses.scss';

import { mockedCoursesList } from '../../constants/mockedCoursesList.js';

const ADD_NEW_BUTTON_TEXT = 'Add new course';

const Courses = () => {
	return (
		<div className={'courses'}>
			<div className={'courses__search-bar-panel'}>
				<SearchBar />
				<Button buttonText={ADD_NEW_BUTTON_TEXT} onClick={()=>{}}/>
			</div>
			{mockedCoursesList.map((course) => (
				<CourseCard
					title={course.title}
					description={course.description}
					authors={course.authors}
					duration={course.duration}
					creationDate={course.creationDate}
				/>
			))}
		</div>
	);
};

export default Courses;
