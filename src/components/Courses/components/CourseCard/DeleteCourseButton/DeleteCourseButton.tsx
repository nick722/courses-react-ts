import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../../common/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteCourseAction } from '../../../../../store/courses/actions';
import { AppDispatch } from '../../../../../store';

interface DeleteCourseButtonProps {
	courseId: string;
}

const DeleteCourseButton = ({ courseId }: DeleteCourseButtonProps) => {
	const dispatch: AppDispatch = useDispatch();

	const handleClick = (courseId) => dispatch(deleteCourseAction(courseId));

	return (
		<Button
			onClick={() => handleClick(courseId)}
			withIcon
			className='delete-course-button'
		>
			<FontAwesomeIcon icon={faTrash} />
		</Button>
	);
};

export default DeleteCourseButton;
