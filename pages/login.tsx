//package import
import React from 'react';
import Head from 'next/head';
// type import
import { GetServerSideProps, NextPage } from 'next';
// helper import
import { supabase } from 'lib/client';
// component import


import AuthentificationLogin from 'components/layout/AuthentificationLogin';
import SplitScreen from 'components/layout/SplitScreen';

const Login: NextPage = () => (
	<>
		<Head>
			<title>CiTiHub: Login Account</title>
		</Head>
		<SplitScreen>
			<>
				<div className="h-full w-full text-center bg-no-repeat text-white bg-[position:0] brightness-[0.25] bg-[url('/images/login_image_1.jpg')]"></div>
				<h1 className="absolute font-sans text-3xl font-black tracking-wider text-white bottom-1/4">
					Connect with fellow candidates
				</h1>
			</>
			<AuthentificationLogin />
		</SplitScreen>
	</>
);

export default Login;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	return { props: { user } };
};
