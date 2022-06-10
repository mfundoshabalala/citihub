import React from 'react';
//
import { useAuth } from 'lib/auth';

const WelcomeHeader = () => {
	const context = useAuth();

	return (
		<h1 className="text-4xl font-black drop-shadow">
			{context?.user && (
				<>
					<span className="">Welcome back </span>
					<span className="">
						<span className="">CiTi</span>
						<span className="">Zen.</span>
					</span>
				</>
			)}
			{!context?.user && <>Welcome to the CiTiZen&apos;s Hub!</>}
		</h1>
	);
};

export default WelcomeHeader;
