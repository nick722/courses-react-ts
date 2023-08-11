import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../../common/Button/Button';

import './DeleteCourseButton.scss';

const DeleteCourseButton = () => {
	return (
		<Button className='delete-course-button'>
			<FontAwesomeIcon icon={faTrash} />
		</Button>
	);
};

export default DeleteCourseButton;
