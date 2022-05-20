//package import
import React from 'react';
// component import
import LocalLink from './LocalLink';

type AuthentificationFooterInterface = React.FunctionComponent<{
	heading: string;
	title: string;
	href: string;
}>;

const AuthentificationFooter: AuthentificationFooterInterface = ({ heading, title, href }) => {
	return (
		<footer className="flex items-center justify-center px-4 text-sm gap-x-1">
			<span className="">{heading}</span>
			<LocalLink href={href} title={title} />
		</footer>
	);
};

export default AuthentificationFooter;
