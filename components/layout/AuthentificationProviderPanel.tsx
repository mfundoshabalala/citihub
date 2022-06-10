// package import
import React from 'react';
// component import
import Flex from 'components/shared/Flex';
import Panel from 'components/shared/Panel';
import ProviderButton from 'components/ProviderButton';

const AuthentificationProviderPanel = () => (
	<Flex className="flex-col items-center gap-y-2">
		<h3 className="">or continue with these social profiles</h3>
		<Panel className="transition-all duration-700">
			<ProviderButton provider="Github" className="shadow-slate-400 hover:border-slate-400" />
			<ProviderButton provider="Google" className="shadow-red-300 hover:border-red-300" />
			<ProviderButton provider="LinkedIn" className="shadow-blue-300 hover:border-blue-300" />
		</Panel>
	</Flex>
);

export default AuthentificationProviderPanel;
