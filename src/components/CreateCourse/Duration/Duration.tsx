import React from 'react';
import Input from '../../common/Input/Input';

const LABEL_TEXT = 'Duration';
const PLACEHOLDER_TEXT = 'Enter duration in minutes...';

const Duration = () => {
	return (
		<div className='duration'>
			<h3>Duration</h3>
			<Input
				labelText={LABEL_TEXT}
				placeholderText={PLACEHOLDER_TEXT}
				onChange={() => {
					/**/
				}}
			/>
			<p>Duration: </p>
		</div>
	);
};

export default Duration;
