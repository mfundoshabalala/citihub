import React from 'react';

type AuthContainerInterface = React.FunctionComponent<{
	children: React.ReactNode;
}>;

const AuthContainer: AuthContainerInterface = ({ children }) => {
	return (
		<section className="max-w-md px-6 py-10 mx-auto space-y-6 text-center border shadow-sm rounded-xl ">
			{children}
		</section>
	);
};

export default AuthContainer;
