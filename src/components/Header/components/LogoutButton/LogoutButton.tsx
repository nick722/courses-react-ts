import React, { useEffect } from 'react';
import { logout, selectIsAuth, selectUserError } from '../../../../store/user';
import Button from '../../../common/Button/Button';
import { AppDispatch } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBearerToken } from '../../../../helpers/getBearerToken';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../constants/routes';

const LOGOUT_BUTTON_TEXT = 'Logout';
const LogoutButton = () => {
	const userError = useSelector(selectUserError);
	const isAuth = useSelector(selectIsAuth);
	const navigate = useNavigate();

	useEffect(() => {
		if (userError) toast.error(userError);
	}, [userError]);

	// const bearerToken = useSelector(selectBearerToken);
	const bearerToken = getBearerToken();
	const dispatch: AppDispatch = useDispatch();

	const handleClick = () => {
		dispatch(logout(bearerToken));

		localStorage.removeItem('token');
		if (!isAuth) {
			navigate(AppRoutes.LOGIN);
		}
	};

	return (
		<>
			<Button withText onClick={handleClick}>
				{LOGOUT_BUTTON_TEXT}
			</Button>
			{/*<ToastContainer*/}
			{/*	position='top-right'*/}
			{/*	autoClose={5000}*/}
			{/*	hideProgressBar={true}*/}
			{/*	closeOnClick*/}
			{/*	theme='colored'*/}
			{/*/>*/}
		</>
	);
};

export default LogoutButton;
