// package import(s)
import React from 'react';
// component(s) import(s)
import ProfileCandidateContactInformation from './ProfileCandidateContactInformation';
import ProfileCandidateSkills from './ProfileCandidateSkills';
import ProfileExperience from './ProfileExperience';

const ProfileCandidateInformation = () => {
	return (
		<section className="relative bg-white shadow-md pb-12">
			<div className="relative space-y-8 lg:space-y-0 -top-10 px-4 md:px-20 flex flex-wrap justify-around w-full text-slate-700">
				<div className="flex flex-wrap justify-center md:flex-col max-w-sm gap-y-6">
					<ProfileCandidateContactInformation />
					<ProfileCandidateSkills />
				</div>
				<ProfileExperience />
			</div>
		</section>
	);
};

export default ProfileCandidateInformation;
