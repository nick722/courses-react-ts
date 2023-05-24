import React from 'react';
import cn from 'classnames';

import './input.scss';

interface InputProps {
	labelText: string;
	placeholderText: string;
	value: string;
	onChange: (target) => void;
	className?: string;
}
const Input = ({
	labelText,
	placeholderText,
	onChange,
	className,
	value,
}: InputProps) => {
	return (
		<div className={cn('input', className)}>
			<label for='input'>{labelText}</label>
			<input
				value={value}
				id='input'
				placeholder={placeholderText}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
