import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../../common/Button/Button';

import './DeleteCourseButton.scss';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const DeleteCourseButton = () => {
	return (
		<Button className='delete-course-button'>
			<FontAwesomeIcon icon={faTrash} />
		</Button>
	);
};

export default DeleteCourseButton;
