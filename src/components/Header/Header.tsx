import React from 'react';
import Logo from './components/Logo/Logo';
import Button from '../common/Button/Button';
import { Outlet } from 'react-router-dom';

import './Header.scss';

const Header = () => {
	return (
		<>
			<header className='header'>
				<Logo />
				<div className='header__right-block'>
					Nik
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
