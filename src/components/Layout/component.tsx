import React from 'react';
import { useState } from 'react';

import Sidebar from './Sidebar';
import NewGroupModal from '../Modals/NewGroupModal';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [isModalActive, setModalState] = useState(false);

	const toggleModalActive = () => {
		setModalState(!isModalActive);
	};

	return (
		<>
			<div className='min-h-screen bg-slate-400 grid grid-cols-[225px_auto]'>
				<Sidebar toggleModalActive={toggleModalActive} />
				<main>{children}</main>
			</div>
			{isModalActive && <NewGroupModal toggleModalActive={toggleModalActive} />}
		</>
	);
};

export default Layout;
