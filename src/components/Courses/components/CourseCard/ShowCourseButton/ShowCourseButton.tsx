import React from 'react';
import Button from '../../../../common/Button/Button';

const SHOW_COURSE_BUTTON_TEXT = 'Show course';
const ShowCourseButton = () => {
	return (
		<Button withText className='show-course-button'>
			{SHOW_COURSE_BUTTON_TEXT}
		</Button>
	);
};

export default ShowCourseButton;
