import React from 'react';
//
import Form from 'components/shared/Form';
import Input from 'components/shared/Input';
import Button from 'components/shared/Button';
//
import useAuthForm from 'hooks/useAuthForm';

const AuthForm = () => {
	const { email, password, handleInputChange, handleSubmit } = useAuthForm();

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				name="email"
				type="email"
				value={email}
				inputMode="email"
				placeholder="CapaCiti Email"
				className="w-full max-w-xs"
				onChange={handleInputChange}
				required
			/>
			<Input
				name="password"
				type="password"
				value={password}
				placeholder="Strong Password"
				className="w-full max-w-xs"
				onChange={handleInputChange}
				required
			/>
			<Button
				type="submit"
				title="Login Account"
				className="w-full mt-3 text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-900"
			/>
		</Form>
	);
};

export default AuthForm;
