//package import
import React from 'react';
import Head from 'next/head';
// type import
import { GetServerSideProps, NextPage } from 'next';
// helper import
import { supabase } from 'lib/client';
// component import
import AuthentificationRegister from 'components/layout/AuthentificationRegister';
import SplitScreen from 'components/layout/SplitScreen';

const Register: NextPage = () => (
	<>
		<Head>
			<title>CiTiHub: Register Account</title>
		</Head>
		<SplitScreen>
			<>
				<div className="h-full w-full text-center bg-no-repeat text-white bg-cover brightness-[0.25] bg-[url('/images/login_image.jpg')]"></div>
				<div className="absolute font-sans text-center text-slate-100 bottom-[20%]">
					<h1 className="text-xl font-bold tracking-wider">Connect with your friends and colleagues</h1>
					<p className="font-extralight">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, omnis?
					</p>
				</div>
			</>
			<AuthentificationRegister />
		</SplitScreen>
	</>
);

export default Register;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	return { props: { user } };
};
