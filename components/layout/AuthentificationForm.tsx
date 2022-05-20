import React from 'react';
//
import Form from 'components/shared/Form';
import Input from 'components/shared/Input';
import Button from 'components/shared/Button';
//
import useAuthentificationForm from 'hooks/useAuthentificationForm';

const AuthentificationForm: React.FC<{ page: string }> = ({ page }) => {
	const { email, password, handleInputChange, handleSubmit } = useAuthentificationForm();

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				name="email"
				type="email"
				value={email}
				inputMode="email"
				placeholder="CapaCiTi Email"
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
				title={`${page} Account`}
				className="w-full mt-3 text-white bg-teal-600 hover:bg-teal-700 active:bg-teal-900"
			/>
		</Form>
	);
};

export default AuthentificationForm;
