import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../../common/Button/Button';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../../../../constants/routes';

const UpdateCourseButton = () => {
	const navigate = useNavigate();

	const navigateToUpdateCourse = () => {
		navigate(APP_ROUTES.UPDATE_COURSE);
	};

	return (
		<Button
			onClick={navigateToUpdateCourse}
			withIcon
			className='update-course-button'
		>
			<FontAwesomeIcon icon={faPen} />
		</Button>
	);
};

export default UpdateCourseButton;
