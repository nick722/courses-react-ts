import React from 'react';

import './CourseInfo.scss';

const CourseInfo = () => {
	return (
		<div className='course-info'>
			<p> &lt; Back to courses</p>
			<h1>Title</h1>
			<div className='course-info__main'>
				<div className='course-info__left-side'>
					<p>Description</p>
				</div>
				<div className='course-info__right-side'>
					<p>ID: </p>
					<p>Duration: </p>
					<p>Created: </p>
					<p>Authors:</p>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
