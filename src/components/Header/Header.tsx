import React from 'react';
import Logo from './components/Logo/Logo';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../store/user';
import LogoutButton from './components/LogoutButton/LogoutButton';
import './Header.scss';

const Header = () => {
	const userName = useSelector(selectUserName);

	return (
		<>
			<header className='header'>
				<Logo />
				<div className='header__right-block'>
					<span className='header__user-name'>{userName}</span>
					<LogoutButton />
				</div>
			</header>
			<Outlet />
		</>
	);
};

export default Header;
