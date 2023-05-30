import React from 'react';
import Input from '../common/Input/Input';
import { Link } from 'react-router-dom';

import './Login.scss';
import Button from '../common/Button/Button';

const baseClass = 'login';
const EMAIL_LABEL = 'Email';
const EMAIL_PLACEHOLDER = 'Enter email';
const PASSWORD_LABEL = 'Password';
const PASSWORD_PLACEHOLDER = 'Enter password';
const LOGIN_BUTTON_TEXT = 'Login';

const Login = () => {
	return (
		<div className={`${baseClass}`}>
			<h1>Login</h1>
			<form className={`${baseClass}__form`}>
				<Input
					labelText={EMAIL_LABEL}
					placeholderText={EMAIL_PLACEHOLDER}
					value=''
					onChange={() => {
						/**/
					}}
					name={EMAIL_LABEL}
				/>
				<Input
					labelText={PASSWORD_LABEL}
					placeholderText={PASSWORD_PLACEHOLDER}
					value=''
					onChange={() => {
						/**/
					}}
					name={PASSWORD_LABEL}
				/>
				<Button buttonText={LOGIN_BUTTON_TEXT} />
			</form>
			<p>
				If you don't have an account you can{' '}
				<Link to={'/registration'}>Register</Link>
			</p>
		</div>
	);
};

export default Login;
