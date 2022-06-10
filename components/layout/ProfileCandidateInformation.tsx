// package import(s)
import React from 'react';
// component(s) import(s)
import ProfileCandidateContactInformation from './ProfileCandidateContactInformation';
import ProfileCandidateSkills from './ProfileCandidateSkills';
import ProfileExperience from './ProfileExperience';

const ProfileCandidateInformation = () => (
	<section className="relative pb-12 bg-white shadow-md">
		<div className="relative flex flex-wrap justify-around w-full px-4 space-y-8 lg:space-y-0 -top-10 md:px-20 text-slate-700">
			<div className="flex flex-wrap justify-center max-w-sm md:flex-col gap-y-6">
				<ProfileCandidateContactInformation />
				<ProfileCandidateSkills />
			</div>
			<ProfileExperience />
		</div>
	</section>
);

export default ProfileCandidateInformation;
