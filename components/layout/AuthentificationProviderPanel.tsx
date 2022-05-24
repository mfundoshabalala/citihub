// package import
import React from 'react';
// component import
import Flex from 'components/shared/Flex';
import Panel from 'components/shared/Panel';
import { default as AuthIcon } from 'components/shared/Icon';

const AuthentificationProviderPanel = () => {
	return (
		<Flex className="flex-col items-center gap-y-2">
			<h3 className="">or continue with these social profiles</h3>
			<Panel>
				<AuthIcon icon="google" />
				<AuthIcon icon="github" />
				<AuthIcon icon="twitter" />
				<AuthIcon icon="facebook" />
			</Panel>
		</Flex>
	);
};

export default AuthentificationProviderPanel;
