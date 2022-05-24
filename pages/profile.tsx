// package(s) import(s)
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
// packege type(s) import(s)
import type { GetServerSideProps, NextPage } from 'next';
// helper(s) import(s)
import { supabase } from 'lib/client';
// component(s) import(s)
import ProfileLayout from 'components/layout/ProfileLayout';
import ProfileHeader from 'components/layout/ProfileHeader';
import ProfileCandidateInformation from 'components/layout/ProfileCandidateInformation';

const Profile: NextPage = () => {
	const router = useRouter();
	useEffect(() => {
		const user = supabase.auth.user();
		console.log(user?.user_metadata);
		if (!user) {
			router.push('/login');
		}
	}, [router]);

	return (
		<ProfileLayout>
			<section className="h-full z-20 my-32">
				<ProfileHeader />
				<ProfileCandidateInformation />
			</section>
		</ProfileLayout>
	);
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	return { props: { user } };
};
