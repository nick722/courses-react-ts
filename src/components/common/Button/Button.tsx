import React, { ComponentProps } from 'react';
import cn from 'classnames';

import './Button.scss';

interface ButtonProps extends ComponentProps<'button'> {
	withText?: boolean;
	withIcon?: boolean;
}

const Button = ({
	withText,
	withIcon,
	type,
	onClick,
	className,
	children,
}: ButtonProps) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={cn('button', className, {
				'button--with-text': withText,
				'button--with-icon': withIcon,
			})}
		>
			{children}
		</button>
	);
};

export default Button;
