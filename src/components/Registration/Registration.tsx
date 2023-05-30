import React, { useState } from 'react';
import Input from '../common/Input/Input';

import './Registration.scss';
import Button from '../common/Button/Button';
import { Link } from 'react-router-dom';

const NAME_INPUT_LABEL = 'Name';
const NAME_INPUT_PLACEHOLDER = 'Enter name';
const EMAIL_INPUT_LABEL = 'Email';
const EMAIL_INPUT_PLACEHOLDER = 'Enter email';
const PASSWORD_INPUT_LABEL = 'Password';
const PASSWORD_INPUT_PlACEHOLDER = 'Enter passowrd';
const REGISTRATION_BUTTON_TEXT = 'Registration';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const ERROR_MESSAGE = `Registration failed: ${error}`;
	const register = async (event) => {
		event.preventDefault();

		const newUser = {
			name: event.target.name.value,
			password: event.target.password.value,
			email: event.target.email.value,
		};

		try {
			const response = await fetch('http://localhost:4000/register', {
				method: 'POST',
				body: JSON.stringify(newUser),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response?.ok) {
				setError(`${response.status} ${response.statusText}`);
			}
			const result = await response.json();
		} catch (error) {
			setError(`Registration failed: ${error}`);
		}
	};

	return (
		<div className='registration'>
			<form onSubmit={(e) => register(e)} className='registration__form'>
				<h1>Registration</h1>
				<Input
					labelText={NAME_INPUT_LABEL}
					placeholderText={NAME_INPUT_PLACEHOLDER}
					value={name}
					onChange={setName}
					name='name'
				/>
				<Input
					labelText={EMAIL_INPUT_LABEL}
					placeholderText={EMAIL_INPUT_PLACEHOLDER}
					value={email}
					onChange={setEmail}
					name='email'
				/>
				<Input
					labelText={PASSWORD_INPUT_LABEL}
					placeholderText={PASSWORD_INPUT_PlACEHOLDER}
					value={password}
					onChange={setPassword}
					name='password'
				/>
				<Button buttonText={REGISTRATION_BUTTON_TEXT} />
				<p className='registration__error'>{ERROR_MESSAGE}</p>
				<p>
					If you have an account you can <Link to='/login'>Login</Link>
				</p>
			</form>
		</div>
	);
};

export default Registration;
