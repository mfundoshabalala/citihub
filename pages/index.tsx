//
import { NextPage } from 'next';
//
import { useAuth } from 'lib/auth';
//
import Layout from 'components/Layout';
import LocalLink from 'components/shared/LocalLink';
import Flex from 'components/shared/Flex';
import Button from 'components/shared/Button';

const Home: NextPage = () => {
	const context = useAuth();

	return (
		<Layout>
			{context?.user && (
				<Flex className="flex-col justify-center">
					<h2>Welcome!</h2>
					<code className="highlight">{context?.user?.role}</code>
					<Flex className="items-center justify-center gap-x-4">
						<LocalLink
							href="/profile"
							title="My profile"
							className="px-6 py-2 border border-orange-200 rounded shadow shadow-orange-100 hover:border-orange-600 active:bg-orange-400 active:text-white"
						/>
						<Button
							title="Logout"
							onClick={context?.signOut}
							className="text-white bg-violet-600 hover:bg-violet-700 active:bg-violet-900 active:shadow-sm"
						/>
					</Flex>
				</Flex>
			)}
			{!context?.user && (
				<>
					<h2>Welcome!</h2>
					<LocalLink className="px-6 py-2 rounded shadow" href="/login" title="Login" />
					<LocalLink className="px-6 py-2 rounded shadow" href="/register" title="Register" />
				</>
			)}
		</Layout>
	);
};

export default Home;
