import '../styles/globals.css';
//
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
//
import { AuthProvider } from 'lib/auth';
import { supabase } from 'lib/client';

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component?.getLayout ?? ((page) => page);

	return getLayout(
		<AuthProvider supabase={supabase}>
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default MyApp;
