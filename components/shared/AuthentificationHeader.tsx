// package(s) import(s)
import React from 'react';
// component(s) import(s)
import BrandLogo from './BrandLogo';

type AuthentificationHeaderInterface = React.FunctionComponent<{
	title: string;
	subtitle?: string;
}>;

const AuthentificationHeader: AuthentificationHeaderInterface = ({ title, subtitle }) => {
	return (
		<header className="space-y-4 text-center">
			<BrandLogo />
			<div className="drop-shadow-sm">
				<h1 className="flex flex-col text-2xl font-black">{title}</h1>
				<h2 className="">{subtitle}</h2>
			</div>
		</header>
	);
};

export default AuthentificationHeader;
