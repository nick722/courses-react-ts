import React from 'react';
import cn from 'classnames';

import './Button.scss';

interface ButtonProps {
	buttonText: string;
	onClick(): any;
}

const Button = ({ buttonText, onClick, className, ...props }: ButtonProps) => {
	return (
		<button onClick={onClick} className={cn('button', className)}>
			{buttonText}
		</button>
	);
};

export default Button;
