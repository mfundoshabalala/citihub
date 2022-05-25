declare module 'next/server';

type ChildrenInterface = React.FunctionComponent<{
	children: React.ReactNode;
}>;

type LocalLinkInterface = React.FunctionComponent<{
	href: string;
	title: string;
	className?: string;
	prefetch?: boolean;
}>;

type ButtonInterface = React.FunctionComponent<{
	title: string;
	className?: string;
	type?: 'button' | 'submit';
	onClick?: () => void;
}>;

type LinksButtonPanelInterface = ChildrenInterface & { Link: LocalLinkInterface } & {
	Button: ButtonInterface;
};

type AuthentificationFormInterface = React.FunctionComponent<{
	page: string;
	className?: string;
}>;

type AuthentificationFooterInterface = React.FunctionComponent<{
	heading: string;
	title: string;
	href: string;
}>;
