import React from 'react';

const ProfileCandidateSkills = () => {
	return (
		<div className="grid grid-cols-5 place-items-center gap-y-4 max-h-56 bg-white border rounded-md shadow-2xl shadow-violet-300 px-12 py-10">
			<h3 className="w-full font-bold capitalize text-lg whitespace-nowrap underline underline-offset-4 decoration-dotted hover:decoration-orange-500 col-span-full">
				Tech Skills &amp; tools
			</h3>
			<div className="mx-auto w-10 h-10 grid place-items-center">
				<i className="devicon-html5-plain colored" />
			</div>
			<div className="mx-auto w-10 h-10 grid place-items-center">
				<i className="fab fa-2xl fa-css3-alt" />
			</div>
			<div className="mx-auto w-10 h-10 grid place-items-center">
				<i className="fab fa-2xl fa-bootstrap" />
			</div>
			<div className="mx-auto w-10 h-10 grid place-items-center">
				<i className="fab fa-2xl fa-git-alt" />
			</div>
			<div className="mx-auto w-10 h-10 grid place-items-center">
				<i className="fab fa-2xl fa-html5" />
			</div>
			<div className="mx-auto w-10 h-10 grid place-items-center">
				<i className="fab fa-2xl fa-html5" />
			</div>
			<div className="mx-auto w-10 h-10 grid place-items-center">
				<i className="fab fa-2xl fa-html5" />
			</div>
			<div className="mx-auto w-10 h-10 grid place-items-center">
				<i className="fab fa-2xl fa-html5" />
			</div>
			<div className="mx-auto w-10 h-10 grid place-items-center">
				<i className="fab fa-2xl fa-html5" />
			</div>
			<div className="mx-auto w-10 h-10 grid place-items-center">
				<i className="fab fa-2xl fa-html5" />
			</div>
		</div>
	);
};

export default ProfileCandidateSkills;
