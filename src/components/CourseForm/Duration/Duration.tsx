import React, { useState } from 'react';
import Input from '../../common/Input/Input';
import formatCourseDuration from '../../../helpers/formatCourseDuration';

import './duration.scss';

const LABEL_TEXT = 'Duration';
const PLACEHOLDER_TEXT = 'Enter duration in minutes...';
const forbiddenSymbols = /[a-zA-Z@#$%^&]/;

interface DurationProps {
	initialValue: string;
}

const Duration = ({ initialValue }: DurationProps) => {
	const [duration, setDuration] = useState(initialValue || '');
	const [errorMessage, setErrorMessage] = useState('');

	const handleChange = (value: string) => {
		if (!forbiddenSymbols.test(value)) {
			setDuration(value);
			setErrorMessage('');
		} else {
			setErrorMessage('Please enter the duration in minutes!');
		}
	};

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
			<p>Duration: {formatCourseDuration(+duration)}</p>
			{errorMessage && <p className='duration__error'>{errorMessage}</p>}
		</div>
	);
};

export default Duration;
