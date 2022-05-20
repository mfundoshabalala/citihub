// package(s) import(s)
import React from 'react';
import Image from 'next/image';
// component(s) import(s)
import ProfileHeaderIconPanel from 'components/ProfileHeaderIconPanel';

const ProfileHeader = () => {
	return (
		<section className="relative pb-10 text-white shadow h-72 bg-gradient-to-r from-slate-900 to-slate-700">
			<div className="container flex items-center h-full mx-auto  px-4 md:px-28 gap-x-4 sm:gap-x-7 md:gap-x-10">
				<Image
					className="w-5 h-5 rounded-full hidden lg:block"
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
						<i className="fa fa-briefcase" />
						<h2 className="text-lg font-light">Tech Champ at CapaCiTi</h2>
					</div>
					<p className="font-thin leading-tight text-justify text-gray-400 max-w-prose">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla quod accusantium aliquam
						repudiandae rem dolore asperiores quasi sit sunt vitae ipsam maxime, modi possimus. Impedit saepe
						laborum harum similique.
					</p>
					<ProfileHeaderIconPanel />
				</div>
			</div>
		</section>
	);
};

export default ProfileHeader;
