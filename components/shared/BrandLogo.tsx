import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
//
import CitiLogo from '../../public/images/citi-logo.svg';

type BrandLogoInterface = React.FunctionComponent<{
	href?: string;
	image?: string;
	alt?: string;
	height?: number;
	width?: number;
}>;

const BrandLogo: BrandLogoInterface = ({ href, image, alt, height, width }) => (
	<Link href={`${href ?? '/'}`} passHref>
		<Image
			src={image ?? CitiLogo}
			width={width ?? 200}
			height={height ?? 100}
			className="relative cursor-pointer"
			alt={`${alt ?? 'CapaCiti logo'}`}
		/>
	</Link>
);

export default BrandLogo;
