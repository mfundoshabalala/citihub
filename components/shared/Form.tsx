import React from 'react';

type FormInterface = React.FunctionComponent<{
	className?: string;
	children: React.ReactNode;
	onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}>;

const Form: FormInterface = ({ className, children, onSubmit }) => {
	return (
		<form onSubmit={onSubmit} className={`flex flex-col items-center w-full gap-3 py-2 ${className}`}>
			{children}
		</form>
	);
};

export default Form;
