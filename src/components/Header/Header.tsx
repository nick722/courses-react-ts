import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../common/Button/Button';
import { Outlet } from 'react-router-dom';

import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
	logout,
	selectBearerToken,
	selectUserName,
} from '../../store/user/userSlice';
import { AppDispatch } from '../../store';

const Header = () => {
	const userName = useSelector(selectUserName);
	const bearerToken = useSelector(selectBearerToken);
	const dispatch: AppDispatch = useDispatch();

	return (
		<>
			<header className='header'>
				<Logo />
				<div className='header__right-block'>
					<span className='header__user-name'>{userName}</span>
					<Button
						buttonText='Logout'
						onClick={() => {
							dispatch(logout(bearerToken));
						}}
					/>
				</div>
			</header>
			<Outlet />
		</>
	);
};

export default Header;
