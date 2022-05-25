// package import
import React from 'react';
// component import
import Flex from 'components/shared/Flex';
import Panel from 'components/shared/Panel';
import { default as AuthenticationProviderIcon } from 'components/shared/Icon';

const AuthentificationProviderPanel = () => {
	return (
		<Flex className="flex-col items-center gap-y-2">
			<h3 className="">or continue with these social profiles</h3>
			<Panel>
				<AuthenticationProviderIcon icon="linkedin-in" className="hover:ring-blue-600 hover:bg-blue-600" />
				<AuthenticationProviderIcon icon="github" className="hover:ring-slate-900 hover:bg-slate-900" />
				<AuthenticationProviderIcon icon="twitter" className="hover:ring-blue-400 hover:bg-blue-400" />
				<AuthenticationProviderIcon icon="google" className="hover:ring-rose-600 hover:bg-rose-600" />
				<AuthenticationProviderIcon icon="facebook" className="hover:ring-blue-600 hover:bg-blue-600" />
			</Panel>
		</Flex>
	);
};

export default AuthentificationProviderPanel;
