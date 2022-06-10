import React from 'react';

const ProfileCandidateContactInformation = () => (
	<div className="flex max-h-72 flex-col bg-white border rounded-md shadow-2xl shadow-violet-300 gap-y-6 px-12 py-10">
		<h3 className="font-bold capitalize text-lg whitespace-nowrap underline underline-offset-4 decoration-dotted hover:decoration-orange-500">
			Contact Information
		</h3>
		<ul className="flex flex-col gap-y-2">
			<li className="flex gap-x-4">
				<i className="far fa-lg fa-envelope mt-4 w-6 text-slate-600" aria-hidden />
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
				<i className="fa fa-lg fa-link mt-4 w-6 text-slate-600" aria-hidden />
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
				<i className="fa fa-lg fa-cake mt-4 w-6 text-slate-600" aria-hidden />
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
);

export default ProfileCandidateContactInformation;
