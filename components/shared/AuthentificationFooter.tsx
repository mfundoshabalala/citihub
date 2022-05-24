//package import
import React from 'react';
// component import
import LocalLink from './LocalLink';

const AuthentificationFooter: AuthentificationFooterInterface = ({ heading, title, href }) => {
	return (
		<footer className="flex items-center justify-center px-4 text-sm gap-x-2">
			<span className="">{heading}</span>
			<LocalLink href={href} title={title} />
		</footer>
	);
};

export default AuthentificationFooter;
