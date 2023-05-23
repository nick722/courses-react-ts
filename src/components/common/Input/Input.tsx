import React from 'react';

import './input.scss';

interface InputProps {
	labelText: string;
	placeholderText: string;
	onChange: () => void;
}
const Input = ({ labelText, placeholderText, onChange }: InputProps) => {
	return (
		<div className='input'>
			<label for='input'>{labelText}</label>
			<input id='input' placeholder={placeholderText} onChange={onChange} />
		</div>
	);
};

export default Input;
