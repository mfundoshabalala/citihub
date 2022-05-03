// package import
import React from 'react';
// components import
import AuthFooter from 'components/shared/AuthFooter';
import AuthHeader from 'components/shared/AuthHeader';
import AuthContainer from 'components/shared/AuthContainer';
// layout component import
import AuthForm from './AuthForm';
import AuthProviderPanel from './AuthProviderPanel';

const AuthLogin = () => {
	return (
		<AuthContainer>
			<AuthHeader title="CapaCiti Hub" subtitle="Login" />
			<AuthForm />
			<AuthProviderPanel />
			<AuthFooter heading="Not a registered member?" href="/register" title="register" />
		</AuthContainer>
	);
};

export default AuthLogin;
