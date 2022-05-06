//
import React from 'react';
import Head from 'next/head';
//
import Footer from './Footer';
import ProfileHeading from './ProfileHeading';

type ProfileLayoutInterface = React.FunctionComponent<{
	children: React.ReactNode;
}>;

const ProfileLayout: ProfileLayoutInterface = ({ children }) => {
	return (
		<>
			<Head>
				<title>Profile: Mfundo Shabalala</title>
			</Head>
			<div className=" flex flex-col relative bg-gradient-to-r from-violet-100 via-white-100 to-orange-100">
				<ProfileHeading />
				{children}
				<Footer />
			</div>
		</>
	);
};

export default ProfileLayout;
