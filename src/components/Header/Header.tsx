import React from 'react';
import Logo from './components/Logo/Logo';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth, selectUserName } from '../../store/user';
import LogoutButton from './components/LogoutButton/LogoutButton';
import './Header.scss';
import { checkIfAdmin } from '../../helpers/checkIfAdmin';
import { selectUserEmail } from '../../store/user/selectors';

const Header = () => {
	const isAuth = useSelector(selectIsAuth);
	const userEmail = useSelector(selectUserEmail);
	const userName = useSelector(selectUserName);

	return (
		<>
			<header className='header'>
				<Logo />
				<div className='header__right-block'>
					<span className='header__user-name'>
						{checkIfAdmin(userEmail) ? 'Admin' : userName}
					</span>
					{isAuth && <LogoutButton />}
				</div>
			</header>
			<Outlet />
		</>
	);
};

export default Header;
