import React, { ComponentProps } from 'react';
import cn from 'classnames';

import './Button.scss';

interface ButtonProps extends ComponentProps<'button'> {
	buttonText: string;
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
