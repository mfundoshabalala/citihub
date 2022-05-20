//package import
import React from 'react';
// type import
import { GetServerSideProps, NextPage } from 'next';
// helper import
import { supabase } from 'lib/client';
// component import
import Layout from 'components/Layout';
import AuthentificationLogin from 'components/layout/AuthentificationLogin';

const Login: NextPage = () => (
	<Layout>
		<AuthentificationLogin />
	</Layout>
);

export default Login;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	return { props: { user } };
};
