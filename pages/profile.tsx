// package import
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
// type import
import type { GetServerSideProps, NextPage } from 'next';
// helper import
import { supabase } from 'lib/client';
import Image from 'next/image';
import Icon from 'components/shared/Icon';

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
		<section className="h-full caret-transparent">
			<header className="drop-shadow-sm shadow-rose-900 text-center py-4">
				<h1 className="text-4xl font-extrabold">Personal Information</h1>
				<p className="font-light">Basic information, like your name and photo.</p>
			</header>
			<header className="relative pb-10 text-white shadow h-72 bg-gradient-to-r from-slate-900 to-slate-700">
				<div className="container flex items-center h-full mx-auto px-28 gap-x-10">
					<Image
						className="w-5 h-5 rounded-full"
						src={
							'https://media-exp1.licdn.com/dms/image/C5603AQFr8C2MPt2jKA/profile-displayphoto-shrink_200_200/0/1629806298987?e=1657152000&v=beta&t=UAGFXRH2FW7T9bbxCe8oddonc0fd0V22MB_byv3usoc'
						}
						alt="profile"
						height={100}
						width={100}
					/>

					<div className="flex flex-col">
						<h1 className="text-3xl font-light leading-none">Mfundo Shabalala</h1>
						<div className="flex items-center mb-4 gap-x-2 ">
							<Icon href="briefcase" style="solid" icon="briefcase" className="cursor-auto" />
							<h2 className="text-lg font-light">Web Developer</h2>
						</div>
						<p className="font-thin leading-tight text-justify text-gray-400 max-w-prose">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla quod accusantium aliquam
							repudiandae rem dolore asperiores quasi sit sunt vitae ipsam maxime, modi possimus. Impedit
							saepe laborum harum similique.
						</p>
						<div className="flex items-center mt-4 gap-x-3">
							<Icon size="lg" className="hover:text-blue-500" href="https" icon="facebook" />
							<Icon size="lg" className="hover:text-sky-500" href="https" icon="twitter" />
							<Icon size="lg" className="hover:text-slate-500" href="https" icon="github" />
							<Icon size="lg" className="hover:text-sky-500" href="https" icon="linkedin" />
							<Icon size="lg" className="hover:text-green-500" href="https" icon="spotify" />
						</div>
					</div>
				</div>
			</header>
			<div className="relative w-96 text-slate-700">
				<div className="absolute flex flex-col justify-around bg-white border rounded-md shadow-2xl shadow-violet-200  gap-y-6 -top-8 left-10 px-12 py-10">
					<h3 className="font-bold capitalize text-lg whitespace-nowrap">
						Personal &amp; Contact Information
					</h3>
					<ul className="flex flex-col gap-y-2">
						<li className="flex gap-x-4">
							<i className="far fa-lg fa-envelope mt-4 w-6 text-slate-600" aria-hidden></i>
							<div className="flex flex-col leading-snug font-light">
								<span className="font-bold">Email:</span>
								<a
									href="mailto:mfundoshabalala@gmail.com"
									className="text-sky-700 hover:underline underline-offset-1"
									target="_blank"
									rel="noreferrer"
								>
									mfundoshabalala@gmail.com
								</a>
							</div>
						</li>
						<li className="flex gap-x-4">
							<i className="fa fa-lg fa-link mt-4 w-6 text-slate-600" aria-hidden></i>
							<div className="flex flex-col leading-snug font-light">
								<span className="font-bold">Web page:</span>
								<a
									href="https://mfundo.vercel.com"
									className="text-sky-700 hover:underline underline-offset-1"
									target="_blank"
									rel="noreferrer"
								>
									https://mfundo.vercel.com
								</a>
							</div>
						</li>
						<li className="flex gap-x-4">
							<i className="fa fa-lg fa-cake mt-4 w-6 text-slate-600" aria-hidden></i>
							<div className="flex flex-col leading-snug font-light">
								<span className="font-bold">Birthday:</span>
								<a
									href="https://mfundo.vercel.com"
									className="text-sky-700 hover:underline underline-offset-1"
									target="_blank"
									rel="noreferrer"
								>
									Jan, 10
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	return { props: { user } };
};
