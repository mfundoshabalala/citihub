import { Session, SupabaseClient, User } from '@supabase/supabase-js';
import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextInterface {
	session: Session | null;
	user: User | null;
	authView: any;
	setSession?: (session: Session | null) => void;
	setUser?: (user: User | null) => void;
	signOut: () => void;
}

type AuthProviderInterface = React.FC<{
	supabase: SupabaseClient;
	children: React.ReactNode;
}>;

export const EVENTS = {
	PASSWORD_RECOVERY: 'PASSWORD_RECOVERY',
	SIGNED_OUT: 'SIGNED_OUT',
	USER_UPDATED: 'USER_UPDATED',
};

export const VIEWS = {
	SIGN_IN: 'sign_in',
	SIGN_UP: 'sign_up',
	FORGOTTEN_PASSWORD: 'forgotten_password',
	MAGIC_LINK: 'magic_link',
	UPDATE_PASSWORD: 'update_password',
};

export const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider: AuthProviderInterface = ({ supabase, children, ...props }) => {
	const [user, setUser] = useState<User | null>(null);
	const [session, setSession] = useState<Session | null>(null);
	const [authView, setAuthView] = useState<string>(VIEWS?.SIGN_IN);

	useEffect(() => {
		const activeSession = supabase.auth.session();
		setSession(activeSession);
		setUser(activeSession?.user ?? null);

		const { data: authListener } = supabase.auth.onAuthStateChange((event, currentSession) => {
			setSession(currentSession);
			setUser(currentSession?.user ?? null);

			if (event === EVENTS.SIGNED_OUT || event === EVENTS.USER_UPDATED) {
				setAuthView(VIEWS?.SIGN_IN);
			}

			if (event === EVENTS.PASSWORD_RECOVERY) {
				setAuthView(VIEWS?.UPDATE_PASSWORD);
			}
		});

		return () => {
			authListener?.unsubscribe();
		};
	}, [supabase.auth]);

	return (
		<AuthContext.Provider
			value={{
				session,
				user,
				authView,
				signOut: () => supabase.auth.signOut(),
			}}
			{...props}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
