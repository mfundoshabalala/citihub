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
			<div className="text-white text-center">
				<h1 className="text-5xl font-extrabold">Hello World</h1>
				<p className="">Alumni portal</p>
			</div>
			<AuthentificationLogin />
		</SplitScreen>
	</>
);

export default Login;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	return { props: { user } };
};
