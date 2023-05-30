import React, { useState } from 'react';
import Input from '../common/Input/Input';
import { Link } from 'react-router-dom';

import './Login.scss';
import Button from '../common/Button/Button';
import axios from 'axios';
import { BASE_URL } from '../../services';

const baseClass = 'login';
const EMAIL_LABEL = 'Email';
const EMAIL_PLACEHOLDER = 'Enter email';
const PASSWORD_LABEL = 'Password';
const PASSWORD_PLACEHOLDER = 'Enter password';
const LOGIN_BUTTON_TEXT = 'Login';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState('');

	const loginErrorMessage = `Login failed: ${loginError}`;

	const login = async (event) => {
		event.preventDefault();

		const url = `${BASE_URL}/login`;

		const userCreds = {
			email: event.target.email?.value,
			password: event.target.password?.value,
		};

		try {
			const response = await axios.post(url, userCreds);
			setLoginError('');
		} catch (error) {
			console.log('Axios error', error);
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
