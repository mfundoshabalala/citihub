import React from 'react';
import Link from 'next/link';

type LocalLinkInterface = React.FunctionComponent<{
	href: string;
	title: string;
	className?: string;
	prefetch?: boolean;
}>;

const LocalLink: LocalLinkInterface = ({ href, prefetch, title, className }) => {
	return (
		<Link href={href} prefetch={prefetch}>
			<a className={`capitalize ${className ?? 'text-sky-800 hover:underline'}`}>{title}</a>
		</Link>
	);
};

export default LocalLink;
