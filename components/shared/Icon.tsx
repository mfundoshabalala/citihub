import { Provider } from '@supabase/supabase-js';
import { supabase } from 'lib/client';
import React from 'react';

type IconInterface = React.FunctionComponent<{
	icon: string;
	style?: 'solid' | 'brands' | 'regular';
	href?: string;
	size?: string;
	className?: string;
}>;

const Icon: IconInterface = ({ icon, style = 'brands', href, size, className }) => {
	const handleProviderLogin = async (event: React.MouseEvent<HTMLAnchorElement>, provider: Provider) => {
		event.preventDefault();
		await supabase.auth.signIn({
			provider,
		});
	};

	if (href) {
		return (
			<a href={href} className={`${className} cursor-pointer drop-shadow`}>
				<i className={`fa-${style} fa-${icon} fa-${size}`} />
			</a>
		);
	}

	return (
		<a
			onClick={(event) => handleProviderLogin(event, icon as Provider)}
			className={`${className} ring-2 ring-transparent active:scale-[0.95] active:ring-offset-1 transition-all duration-500 hover:text-white px-2 py-1 border rounded-full shadow-md hover:shadow-sm active:shadow-none cursor-pointer hover:border-slate-50`}
		>
			<i className={`fa-${style} fa-${icon} fa-${size}`} />
		</a>
	);
};

export default Icon;
