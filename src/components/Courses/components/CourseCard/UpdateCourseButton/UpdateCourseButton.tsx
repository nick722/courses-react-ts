import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../../common/Button/Button';

const UpdateCourseButton = () => {
	return (
		<Button withIcon className='update-course-button'>
			<FontAwesomeIcon icon={faPen} />
		</Button>
	);
};

export default UpdateCourseButton;
