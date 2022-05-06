//
import React from 'react';
//
import BrandLogo from 'components/shared/BrandLogo';
import SiteMap from './SiteMap';

const Footer = () => (
	<footer className="flex justify-between items-center fixed bottom-0 w-full h-32 px-20 z-10">
		<BrandLogo />
		<SiteMap />
	</footer>
);

export default Footer;
