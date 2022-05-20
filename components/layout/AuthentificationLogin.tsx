// package import
import React from 'react';
// components import
import AuthentificationFooter from 'components/shared/AuthentificationFooter';
import AuthentificationHeader from 'components/shared/AuthentificationHeader';
import AuthentificationContainer from 'components/shared/AuthentificationContainer';
// layout component import
import AuthentificationForm from './AuthentificationForm';
import AuthentificationProviderPanel from './AuthentificationProviderPanel';

const AuthentificationLogin = () => (
	<AuthentificationContainer>
		<AuthentificationHeader title="CapaCiTi Hub" subtitle="Login to your account." />
		<AuthentificationForm page="Login" />
		<AuthentificationProviderPanel />
		<AuthentificationFooter heading="Not a registered member?" href="/register" title="register" />
	</AuthentificationContainer>
);

export default AuthentificationLogin;
