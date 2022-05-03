import React from 'react';

type PanelInterface = React.FunctionComponent<{
	className?: string;
	children: React.ReactNode;
}>;

const Panel: PanelInterface = ({ className, children }) => {
	return <div className={`flex ${className} gap-x-4`}>{children}</div>;
};

export default Panel;
