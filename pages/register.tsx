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
			<>Hello world</>
			<AuthentificationRegister />
		</SplitScreen>
	</>
);

export default Register;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	return { props: { user } };
};
