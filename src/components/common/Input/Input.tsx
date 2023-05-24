import React from 'react';
import cn from 'classnames';

import './input.scss';

interface InputProps {
	labelText: string;
	placeholderText: string;
	onChange: () => void;
	className?: string;
}
const Input = ({
	labelText,
	placeholderText,
	onChange,
	className,
}: InputProps) => {
	return (
		<div className={cn('input', className)}>
			<label for='input'>{labelText}</label>
			<input id='input' placeholder={placeholderText} onChange={onChange} />
		</div>
	);
};

export default Input;
