//
import { NextPage } from 'next';
//
import { useAuth } from 'lib/auth';
//
import Layout from 'components/Layout';
import Flex from 'components/shared/Flex';
import Button from 'components/shared/Button';
import LocalLink from 'components/shared/LocalLink';
import Head from 'next/head';
import BrandLogo from 'components/shared/BrandLogo';

const Home: NextPage = () => {
	const context = useAuth();

	return (
		<>
			<Head>
				<title>Welcome CiTizen</title>
			</Head>
			<Layout>
				{context?.user && (
					<Flex className="flex-col justify-center items-center gap-y-10">
						<BrandLogo />
						<h1 className="text-4xl capitalize font-black drop-shadow">
							<span className="">Welcome back </span>
							<span className="">
								<span className="">CiTi</span>
								<span className="">zen.</span>
							</span>
						</h1>
						<code className="font-thin text-orange-50 drop-shadow shadow-inner w-fit capitalize px-6 py-4 rounded bg-slate-800">
							{context?.user?.role}
						</code>
						<Flex className="items-center justify-center gap-x-4 drop-shadow">
							<LocalLink
								href="/profile"
								title="My profile"
								className="hover:scale-110 active:scale-100 px-6 py-2 border border-orange-200 rounded shadow shadow-orange-100 hover:border-orange-600 active:bg-orange-400 active:text-white"
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
					<Flex className="flex-col items-center gap-y-10">
						<BrandLogo />
						<h1 className="text-4xl capitalize font-black drop-shadow">Welcome to the CiTizen&apos;s Hub!</h1>
						<div className="flex gap-x-8">
							<LocalLink
								className="px-8 py-2 text-white bg-violet-600 rounded shadow"
								href="/login"
								title="Login"
							/>
							<LocalLink
								className="px-8 py-2 text-white bg-orange-600 rounded shadow"
								href="/register"
								title="Register"
							/>
						</div>
					</Flex>
				)}
			</Layout>
		</>
	);
};

export default Home;
