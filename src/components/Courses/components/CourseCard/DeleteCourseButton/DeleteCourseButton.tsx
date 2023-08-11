import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../../common/Button/Button';

const DeleteCourseButton = () => {
	return (
		<Button withIcon className='delete-course-button'>
			<FontAwesomeIcon icon={faTrash} />
		</Button>
	);
};

export default DeleteCourseButton;
