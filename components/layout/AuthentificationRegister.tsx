// package import
import React from 'react';
// components import
import AuthentificationFooter from 'components/shared/AuthentificationFooter';
import AuthentificationHeader from 'components/shared/AuthentificationHeader';
import AuthentificationContainer from 'components/shared/AuthentificationContainer';
// layout component import
import AuthentificationForm from './AuthentificationForm';
import AuthentificationProviderPanel from './AuthentificationProviderPanel';

const AuthentificationRegister = () => {
	return (
		<AuthentificationContainer>
			<AuthentificationHeader title="CapaCiTi Hub" subtitle="Join your alumni cohort" />
			<AuthentificationForm page="Register" />
			<AuthentificationProviderPanel />
			<AuthentificationFooter heading="Already a member?" href="/login" title="login" />
		</AuthentificationContainer>
	);
};

export default AuthentificationRegister;
