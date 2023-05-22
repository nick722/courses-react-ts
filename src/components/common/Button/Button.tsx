import React from 'react';

import './Button.scss';

interface ButtonProps {
	buttonText: string;
	onClick(): any;
}

const Button = ({ buttonText, onClick }: ButtonProps) => {
	return <button className='logout-button'>{buttonText}</button>;
};

export default Button;
