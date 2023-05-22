import React from 'react';

interface InputProps {
	labelText: string;
	placeholderText: string;
	onChange: () => void;
}
const Input = ({ labelText, placeholderText, onChange }: InputProps) => {
	return (
		<div>
			<input id='input' placeholder={placeholderText} onChange={onChange} />
			<label for='input'>{labelText}</label>
		</div>
	);
};

export default Input;
