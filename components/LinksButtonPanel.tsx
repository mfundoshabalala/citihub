import React from 'react';
// components imports
import Flex from './shared/Flex';
import Button from './shared/Button';
import LocalLink from 'components/shared/LocalLink';

const LinksButtonPanel: LinksButtonPanelInterface = ({ children }) => {
	return <Flex className="items-center justify-center mt-12 gap-x-6 drop-shadow">{children}</Flex>;
};

export default LinksButtonPanel;

LinksButtonPanel.Link = LocalLink;
LinksButtonPanel.Button = Button;
