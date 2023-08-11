import React, { useEffect } from 'react';
import {
	logout,
	selectBearerToken,
	selectUserError,
} from '../../../../store/user';
import Button from '../../../common/Button/Button';
import { AppDispatch } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LOGOUT_BUTTON_TEXT = 'Logout';
const LogoutButton = () => {
	const userError = useSelector(selectUserError);

	useEffect(() => {
		if (userError) toast.error(userError);
	}, [userError]);

	const bearerToken = useSelector(selectBearerToken);
	const dispatch: AppDispatch = useDispatch();
	return (
		<>
			<Button
				withText
				onClick={() => {
					dispatch(logout(bearerToken));
					if (userError) toast.error(userError);
				}}
			>
				{LOGOUT_BUTTON_TEXT}
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

export default LogoutButton;
