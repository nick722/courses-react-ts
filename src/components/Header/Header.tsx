import React from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

import './Header.scss';

const Header = () => {
	return (
		<header className='header'>
			<Logo />
			<div className='header__right-block'>
				Nik
				<Button buttonText='Logout' onClick={()=>{}}/>
			</div>
		</header>
	);
};

export default Header;
