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
	id: string;
}

const DeleteCourseButton = ({ id }: DeleteCourseButtonProps) => {
	const dispatch: AppDispatch = useDispatch();

	const handleClick = () => {
		dispatch(deleteCourse(id));
	};

	return (
		<>
			<Button onClick={handleClick} withIcon className='delete-course-button'>
				<FontAwesomeIcon icon={faTrash} />
			</Button>
			{/*<ToastContainer*/}
			{/*	position='top-right'*/}
			{/*	autoClose={1000}*/}
			{/*	hideProgressBar={true}*/}
			{/*	closeOnClick*/}
			{/*	theme='colored'*/}
			{/*/>*/}
		</>
	);
};

export default DeleteCourseButton;
