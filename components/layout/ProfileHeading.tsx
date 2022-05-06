import React from 'react';

const ProfileHeading = () => {
	return (
		<header className="fixed flex flex-col justify-center w-full h-32 top-0 z-0 drop-shadow-md shadow-violet-900 text-center">
			<h1 className="text-4xl font-extrabold">Personal Information</h1>
			<p className="font-light">Basic information, like your name and photo.</p>
		</header>
	);
};

export default ProfileHeading;
