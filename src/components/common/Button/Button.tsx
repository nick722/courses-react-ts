import React from 'react';
import cn from 'classnames';

import './Button.scss';

interface ButtonProps {
	buttonText: string;
	onClick?: () => any;
	type?: any;
	className?: string;
}

const Button = ({
	type,
	buttonText,
	onClick,
	className,
	...props
}: ButtonProps) => {
	return (
		<button type={type} onClick={onClick} className={cn('button', className)}>
			{buttonText}
		</button>
	);
};

export default Button;
