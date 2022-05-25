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
			<AuthentificationForm
				page="Register"
				className="font-medium shadow-lg active:shadow-sm transition-all duration-300 border-0 active:scale-[0.98] text-white bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"
			/>
			<AuthentificationProviderPanel />
			<AuthentificationFooter heading="Already a member?" href="/login" title="login" />
		</AuthentificationContainer>
	);
};

export default AuthentificationRegister;
