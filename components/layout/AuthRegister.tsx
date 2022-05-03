// package import
import React from 'react';
// components import
import AuthFooter from 'components/shared/AuthFooter';
import AuthHeader from 'components/shared/AuthHeader';
import AuthContainer from 'components/shared/AuthContainer';
// layout component import
import AuthForm from './AuthForm';
import AuthProviderPanel from './AuthProviderPanel';

const AuthRegister = () => {
	return (
		<AuthContainer>
			<AuthHeader title="CapaCiti Hub" subtitle="Join your alumni cohort" />
			<AuthForm />
			<AuthProviderPanel />
			<AuthFooter heading="Already a member?" href="/login" title="login" />
		</AuthContainer>
	);
};

export default AuthRegister;
