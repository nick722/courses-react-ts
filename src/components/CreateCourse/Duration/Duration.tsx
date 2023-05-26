import React, { useState } from 'react';
import Input from '../../common/Input/Input';
import getCourseDuration from '../../../helpers/getCourseDuration';

import './duration.scss';

const LABEL_TEXT = 'Duration';
const PLACEHOLDER_TEXT = 'Enter duration in minutes...';
const forbiddenSymbols = /[a-zA-Z@#$%^&]/;

const Duration = () => {
	const [duration, setDuration] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleChange = (value: string) => {
		if (!forbiddenSymbols.test(value)) {
			setDuration(value);
			setErrorMessage('');
		} else {
			setErrorMessage('Please enter the duration in minutes!');
		}
	};

	console.log('duration', duration);

	return (
		<div className='duration'>
			<h3>Duration</h3>
			<Input
				name='duration'
				labelText={LABEL_TEXT}
				placeholderText={PLACEHOLDER_TEXT}
				onChange={handleChange}
				value={duration}
			/>
			<p>Duration: {getCourseDuration(+duration)}</p>
			{errorMessage && <p className='duration__error'>{errorMessage}</p>}
		</div>
	);
};

export default Duration;
