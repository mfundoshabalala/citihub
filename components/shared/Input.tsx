import React from 'react';

type InputInterface = React.FunctionComponent<{
	type?: string;
	name: string;
	value: string;
	inputMode?: 'text' | 'search' | 'email' | 'tel' | 'url' | 'none' | 'numeric' | 'decimal' | undefined;
	required?: boolean;
	className?: string;
	placeholder: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}>;

const Input: InputInterface = (props) => {
	const { type, name, value, inputMode, placeholder, required, onChange, className } = props;
	return (
		<input
			type={type}
			name={name}
			value={value}
			required={required}
			onChange={onChange}
			inputMode={inputMode}
			placeholder={placeholder}
			className={`rounded shadow-sm border-zinc-200 caret-violet-700 ${className}`}
		/>
	);
};

export default Input;
