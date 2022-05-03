import React from 'react';
import Head from 'next/head';

type LayoutInterface = React.FunctionComponent<{
	children: React.ReactNode;
	className?: string;
}>;

const Layout: LayoutInterface = ({ children, className }) => {
	return (
		<div className={`flex flex-col items-center justify-center min-h-screen py-2 ${className}`}>
			<Head>
				<title>Next.js with Supabase Auth</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-col items-center justify-center w-full px-8 text-center sm:px-20">
				<div className="w-full">{children}</div>
			</main>
		</div>
	);
};

export default Layout;
