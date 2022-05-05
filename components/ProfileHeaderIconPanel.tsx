// package(s) import(s)
import React from 'react';
//component(s) import(s)
import Icon from './shared/Icon';
import Panel from './shared/Panel';

const ProfileHeaderIconPanel = () => {
	return (
		<Panel className="flex items-center mt-4 gap-x-4">
			<Icon size="lg" className="hover:text-blue-500" href="https" icon="facebook" />
			<Icon size="lg" className="hover:text-sky-500" href="https" icon="twitter" />
			<Icon size="lg" className="hover:text-slate-500" href="https" icon="github" />
			<Icon size="lg" className="hover:text-sky-500" href="https" icon="linkedin" />
			<Icon size="lg" className="hover:text-green-500" href="https" icon="spotify" />
		</Panel>
	);
};

export default ProfileHeaderIconPanel;
