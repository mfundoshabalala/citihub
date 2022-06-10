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
			className={`${className} group active:scale-[0.975] transition-all hover:transition-all duration-1000 hover:duration-1000 ease-in-out
			 hover:px-5 p-2 hover:py-[6px] border rounded-full hover:rounded shadow-sm hover:shadow
			active:shadow-none cursor-pointer border-slate-200 capitalize text-sm font-medium text-slate-700
			flex items-center hover:gap-x-2 relative overflow-hidden justify-center w-10 hover:w-max h-10`}
		>
			<Image src={`/images/${provider.toLowerCase()}.svg`} width={18} height={18} alt={provider} />
			<span className="invisible w-0 overflow-hidden text-center translate-x-full group-hover:translate-x-0 group-hover:transition-all group-hover:visible group-hover:duration-500 group-hover:w-14">
				{provider}
			</span>
		</a>
	);
};

export default ProviderButton;
