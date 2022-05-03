//package import
import React from 'react';
// component import
import LocalLink from './LocalLink';

type AuthFooterInterface = React.FunctionComponent<{
	heading: string;
	title: string;
	href: string;
}>;

const AuthFooter: AuthFooterInterface = ({ heading, title, href }) => {
	return (
		<footer className="flex items-center justify-center px-4 text-sm italic gap-x-2">
			<span className="">{heading}</span>
			<LocalLink href={href} title={title} />
		</footer>
	);
};

export default AuthFooter;
