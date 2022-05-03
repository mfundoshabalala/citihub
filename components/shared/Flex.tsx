import React from 'react';

type FlexInterface = React.FunctionComponent<{
	className?: string;
	children: React.ReactNode;
}>;

const Flex: FlexInterface = ({ children, className }) => {
	return <div className={`flex ${className ?? 'gap-4'}`}>{children}</div>;
};

export default Flex;
