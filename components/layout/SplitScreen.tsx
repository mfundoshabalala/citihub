import React from 'react';

type SplitScreenInterface = React.FunctionComponent<{
	children: React.ReactNode[];
	weight1?: number;
	weight2?: number;
	className?: string;
}>;

const SplitScreen: SplitScreenInterface = ({ children, weight1 = 1, weight2 = 1, className }) => {
	const [component1, component2] = children;
	return (
		<div className={`flex flex-wrap min-h-screen w-screen ${className ?? 'bg-slate-900'}`}>
			<div style={{ flex: weight1 }} className="min-w-[360px] flex-1 grid place-items-center">
				{component1}
			</div>
			<div style={{ flex: weight2 }} className="min-w-[360px], className flex-1">
				<div className="bg-white w-full h-full grid place-items-center">{component2}</div>
			</div>
		</div>
	);
};

export default SplitScreen;
