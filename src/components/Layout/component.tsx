import React from 'react';
import { useState } from 'react';

import Sidebar from './Sidebar';
import NewGroupModal from '../Modals/NewGroupModal';

import { trpc } from '@utils/trpc';

const Layout: React.FC = () => {
	const { data } = trpc.useQuery(['get-all-groups']);

	const [isModalActive, setModalState] = useState(false);

	const toggleModalActive = () => {
		setModalState(!isModalActive);
	};

	return (
		<>
			<div className='min-h-screen bg-slate-400 grid grid-cols-[225px]'>
				<Sidebar toggleModalActive={toggleModalActive} groups={data} />
				<main></main>
			</div>
			{isModalActive && <NewGroupModal toggleModalActive={toggleModalActive} />}
		</>
	);
};

export default Layout;
