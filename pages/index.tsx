//
import Head from 'next/head';
import { NextPage } from 'next';
//
import { useAuth } from 'lib/auth';
//
import Layout from 'components/Layout';
import Flex from 'components/shared/Flex';
import BrandLogo from 'components/shared/BrandLogo';
import WelcomeHeader from 'components/WelcomeHeader';
import LinksButtonPanel from 'components/LinksButtonPanel';

const Home: NextPage = () => {
	const context = useAuth();

	return (
		<>
			<Head>
				<title>Welcome CiTizen</title>
			</Head>
			<Layout>
				{context?.user && (
					<Flex className="flex-col items-center justify-center">
						<BrandLogo width={250} height={125} />
						<WelcomeHeader />
						<LinksButtonPanel>
							<LinksButtonPanel.Link
								href="/profile"
								title="profile"
								className="transition-all duration-300 border-0 active:scale-95 px-8 py-2 font-bold text-white rounded active:shadow-sm shadow-lg min-w-[150px] bg-gradient-to-r from-orange-800 via-orange-700 to-orange-800"
							/>
							<LinksButtonPanel.Button
								title="Logout"
								onClick={context?.signOut}
								className="transition-all duration-300 border-0 active:scale-95 px-8 py-2 font-bold text-white rounded active:shadow-sm shadow-lg min-w-[150px] bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800"
							/>
						</LinksButtonPanel>
					</Flex>
				)}
				{!context?.user && (
					<Flex className="flex-col items-center justify-center">
						<BrandLogo width={250} height={125} />
						<WelcomeHeader />
						<LinksButtonPanel>
							<LinksButtonPanel.Link
								className="transition-all duration-300 border-0 active:scale-95 px-8 py-2 font-bold text-white rounded active:shadow-sm shadow-lg min-w-[150px] bg-gradient-to-r from-teal-800 via-teal-700 to-teal-800"
								href="/login"
								title="Login"
							/>
							<LinksButtonPanel.Link
								className="transition-all duration-300 border-0 active:scale-95 px-8 py-2 font-bold text-white rounded active:shadow-sm shadow-lg min-w-[150px] bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"
								href="/register"
								title="Register"
							/>
						</LinksButtonPanel>
					</Flex>
				)}
			</Layout>
		</>
	);
};

export default Home;
