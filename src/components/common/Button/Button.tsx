import React, { ComponentProps } from 'react';
import cn from 'classnames';

import './Button.scss';

type ButtonProps = ComponentProps<'button'>;

const Button = ({
	type,
	onClick,
	className,
	children,
	...props
}: ButtonProps) => {
	return (
		<button type={type} onClick={onClick} className={cn('button', className)}>
			{children}
		</button>
	);
};

export default Button;
