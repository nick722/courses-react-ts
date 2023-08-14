import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../../common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../../store';
import { deleteCourse } from '../../../../../store/courses/thunks';
import { selectCourseDeleteError } from '../../../../../store/courses/selectors';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

interface DeleteCourseButtonProps {
	courseId: string;
}

const DeleteCourseButton = ({ courseId }: DeleteCourseButtonProps) => {
	const dispatch: AppDispatch = useDispatch();
	const deleteError = useSelector(selectCourseDeleteError);

	useEffect(() => {
		if (deleteError) toast.error(deleteError);
	}, [deleteError]);
	const handleClick = (courseId) => dispatch(deleteCourse(courseId));

	return (
		<>
			<Button
				onClick={() => handleClick(courseId)}
				withIcon
				className='delete-course-button'
			>
				<FontAwesomeIcon icon={faTrash} />
			</Button>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={true}
				closeOnClick
				theme='colored'
			/>
		</>
	);
};

export default DeleteCourseButton;
