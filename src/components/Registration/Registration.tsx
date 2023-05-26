import React, { useState } from 'react';
import Input from '../common/Input/Input';

import './Registration.scss';
import Button from '../common/Button/Button';

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

	return (
		<div className='registration'>
			<form className='registration__form'>
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
				{/*<button>Registration</button>*/}
				<Button
					buttonText={REGISTRATION_BUTTON_TEXT}
					onClick={() => {
						/**/
					}}
					type='submit'
				/>
				<p>
					If you have an account you can <a href='#'>Login</a>
				</p>
			</form>
		</div>
	);
};

export default Registration;
