//package import
import React from 'react';
import Head from 'next/head';
// type import
import { GetServerSideProps, NextPage } from 'next';
// helper import
import { supabase } from 'lib/client';
// component import
import Layout from 'components/Layout';
import AuthentificationRegister from 'components/layout/AuthentificationRegister';

const Register: NextPage = () => (
	<>
		<Head>
			<title>CiTiHub: Register Account</title>
		</Head>
		<Layout>
			<AuthentificationRegister />
		</Layout>
	</>
);

export default Register;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	return { props: { user } };
};
