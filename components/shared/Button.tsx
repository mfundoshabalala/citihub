import React from 'react';

type ButtonInterface = React.FunctionComponent<{
	title: string;
	className?: string;
	type?: 'button' | 'submit';
	onClick?: () => void;
}>;

const Button: ButtonInterface = ({ title, type = 'button', className, onClick }) => {
	return (
		<button
			type={type}
			className={`${className} drop-shadow px-8 py-2 border-0 rounded shadow active:shadow-none max-w-xs`}
			onClick={onClick}
		>
			{title}
		</button>
	);
};

export default Button;
