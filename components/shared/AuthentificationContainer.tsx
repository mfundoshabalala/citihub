import React from 'react';

type AuthentificationContainerInterface = React.FunctionComponent<{
	children: React.ReactNode;
}>;

const AuthentificationContainer: AuthentificationContainerInterface = ({ children }) => {
	return (
		<section className="bg-white h-fit max-w-md md:min-w-[420px] px-6 py-10 mx-auto space-y-6 text-center border shadow-sm rounded-xl">
			{children}
		</section>
	);
};

export default AuthentificationContainer;
