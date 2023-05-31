import React, { useEffect, useLayoutEffect, useState } from 'react';
import Input from '../common/Input/Input';
import { Link, useNavigate } from 'react-router-dom';

import './Login.scss';
import Button from '../common/Button/Button';
import axios from 'axios';
import { BASE_URL } from '../../services';
import { AppRoutes } from '../../constants/routes';

const baseClass = 'login';
const EMAIL_LABEL = 'Email';
const EMAIL_PLACEHOLDER = 'Enter email';
const PASSWORD_LABEL = 'Password';
const PASSWORD_PLACEHOLDER = 'Enter password';
const LOGIN_BUTTON_TEXT = 'Login';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

	if (isLoggedIn) {
		return navigate(AppRoutes.COURSES);
	}

	const loginErrorMessage = `Login failed: ${loginError}`;

	const login = async (event) => {
		event.preventDefault();

		const url = `${BASE_URL}/login`;

		const userCreds = {
			email: 'f@g.com', //event.target.email?.value,
			password: '123456', //event.target.password?.value,
		};

		try {
			const response = await axios.post(url, userCreds);
			console.log('response', response);
			setLoginError(null);
			const token = response.data.result;
			localStorage.setItem('token', token);
			setIsLoggedIn(!!localStorage.getItem('token'));
		} catch (error) {
			console.error('Axios error', error);
			setLoginError(error.message);
		}
	};

	return (
		<div className={`${baseClass}`}>
			<h1>Login</h1>
			<form onSubmit={(event) => login(event)} className={`${baseClass}__form`}>
				<Input
					labelText={EMAIL_LABEL}
					placeholderText={EMAIL_PLACEHOLDER}
					value={email}
					onChange={setEmail}
					name='email'
				/>
				<Input
					labelText={PASSWORD_LABEL}
					placeholderText={PASSWORD_PLACEHOLDER}
					value={password}
					onChange={setPassword}
					name='password'
				/>
				<Button buttonText={LOGIN_BUTTON_TEXT} />
			</form>
			<p className={`${baseClass}__error`}>{loginError && loginErrorMessage}</p>
			<p>
				If you don't have an account you can{' '}
				<Link to={'/registration'}>Register</Link>
			</p>
		</div>
	);
};

export default Login;
