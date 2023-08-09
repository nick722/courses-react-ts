import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../common/Button/Button';
import { Outlet } from 'react-router-dom';

import './Header.scss';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../store/user/userSlice';

const Header = () => {
	const userName = useSelector(selectUserName);

	return (
		<>
			<header className='header'>
				<Logo />
				<div className='header__right-block'>
					<span className='header__user-name'>{userName}</span>
					<Button
						buttonText='Logout'
						onClick={() => {
							/*do nothing*/
						}}
					/>
				</div>
			</header>
			<Outlet />
		</>
	);
};

export default Header;
