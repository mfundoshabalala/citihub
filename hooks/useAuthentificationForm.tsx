import React, { useState } from 'react';
import { ApiError } from '@supabase/supabase-js';
//
import { supabase } from 'lib/client';
import { useRouter } from 'next/router';

const useAuthentificationForm = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<ApiError | null>(null);

	const router = useRouter();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event?.target?.name === 'email') setEmail(event.target.value);
		if (event?.target?.name === 'password') setPassword(event.target.value);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (email !== '' && password !== '' && router?.asPath === '/register') {
			const { user, error } = await supabase.auth.signUp({
				email,
				password,
			});

			setError(error);

			if (user) {
				router.push('/login');
			}
		}

		if (email !== '' && password !== '' && router?.asPath === '/login') {
			const { user, error } = await supabase.auth.signIn({
				email,
				password,
			});

			setError(error);

			if (user) {
				router.push('/');
			}
		}
	};

	return { email, password, error, handleInputChange, handleSubmit };
};

export default useAuthentificationForm;
