import React from 'react';
import { supabase } from 'lib/client';
import { Provider } from '@supabase/supabase-js';
import Image from 'next/image';

type ProviderButtonInterface = React.FunctionComponent<{
	className?: string;
	provider: string;
}>;

const ProviderButton: ProviderButtonInterface = ({ className, provider }) => {
	const handleProviderLogin = async (event: React.MouseEvent<HTMLAnchorElement>, provider: Provider) => {
		event.preventDefault();
		provider = provider.toLowerCase() as Provider;
		await supabase.auth.signIn({
			provider,
		});
	};

	return (
		<a
			onClick={(event) => handleProviderLogin(event, provider as Provider)}
			className={`${className} active:scale-[0.95] transition-all duration-500
			hover:text-white px-5 py-[6px] border rounded shadow-sm hover:shadow-sm
			active:shadow-none cursor-pointer hover:border-slate-50 capitalize text-sm font-medium text-slate-700
			flex items-start gap-x-2 whitespace-nowrap relative`}
		>
			<Image src={`/images/${provider.toLowerCase()}.svg`} width={18} height={18} alt={provider} />
			{provider}
		</a>
	);
};

export default ProviderButton;
