import React, { useState } from 'react';
import Input from '../common/Input/Input';
import { Link, useNavigate } from 'react-router-dom';

import './Login.scss';
import Button from '../common/Button/Button';
import { APP_ROUTES } from '../../constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectIsAuth, selectUserError } from '../../store/user';
import { AppDispatch } from '../../store';

const baseClass = 'login';
const EMAIL_LABEL = 'Email';
const EMAIL_PLACEHOLDER = 'Enter email';
const PASSWORD_LABEL = 'Password';
const PASSWORD_PLACEHOLDER = 'Enter password';
const LOGIN_BUTTON_TEXT = 'Login';

const Login = () => {
	const isAuth = useSelector(selectIsAuth);
	const loginError = useSelector(selectUserError);

	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const [loginError, setLoginError] = useState(null);

	if (isAuth) {
		navigate(APP_ROUTES.COURSES);
	}

	const loginErrorMessage = `Login failed: ${loginError}`;

	const handleSubmit = async (event) => {
		event.preventDefault();

		dispatch(login(event));
	};

	return (
		<div className={`${baseClass}`}>
			<h1>Login</h1>
			<form
				onSubmit={(event) => handleSubmit(event)}
				className={`${baseClass}__form`}
			>
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
				<Button withText>{LOGIN_BUTTON_TEXT}</Button>
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
