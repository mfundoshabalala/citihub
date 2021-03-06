// package import
import React from 'react';
// components import
import AuthentificationFooter from 'components/shared/AuthentificationFooter';
import AuthentificationHeader from 'components/shared/AuthentificationHeader';
import AuthentificationContainer from 'components/shared/AuthentificationContainer';
// layout component import
import AuthentificationForm from './AuthentificationForm';
import AuthentificationProviderPanel from './AuthentificationProviderPanel';


const AuthentificationLogin = () => {
	return (
		<AuthentificationContainer>
			<AuthentificationHeader title="CapaCiTi Hub" subtitle="Login to your account." />
			<AuthentificationForm
				page="Login"
				className="font-medium shadow-lg active:shadow-sm transition-all duration-300 border-0 active:scale-[0.98] text-white bg-gradient-to-r from-teal-800 via-teal-700 to-teal-800"
			/>
			<AuthentificationProviderPanel />
			<AuthentificationFooter heading="Not a registered member?" href="/register" title="register" />
		</AuthentificationContainer>
	);
};

export default AuthentificationLogin;
