import React from 'react';
import { logout, selectBearerToken } from '../../../../store/user/userSlice';
import Button from '../../../common/Button/Button';
import { AppDispatch } from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';

const LOGOUT_BUTTON_TEXT = 'Logout';
const LogoutButton = () => {
	const bearerToken = useSelector(selectBearerToken);
	const dispatch: AppDispatch = useDispatch();
	return (
		<Button
			withText
			onClick={() => {
				dispatch(logout(bearerToken));
			}}
		>
			{LOGOUT_BUTTON_TEXT}
		</Button>
	);
};

export default LogoutButton;
