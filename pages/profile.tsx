// package import
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// type import
import { GetServerSideProps, NextPage } from 'next';
// helper import
import { supabase } from 'lib/client';
// component import
import Layout from 'components/Layout';

const Profile: NextPage = () => {
	const router = useRouter();
	const user = supabase.auth.user();

	useEffect(() => {
		if (!user) {
			router.push('/login');
		}

		console.log(user);
	}, [router, user]);

	return (
		<Layout>
			<h2>User Profile</h2>
			<h3>Welcome </h3>
			<div className="">Last Signed In:</div>
			<code className="hightlight">N/A</code>
			<Link href="/" passHref>
				<a className="">Go home</a>
			</Link>
		</Layout>
	);
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	return { props: { user } };
};
