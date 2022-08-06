import React from 'react';
import { useState } from 'react';

import Sidebar from './Sidebar';
import NewGroupModal from '../Modals/NewGroupModal';

const Layout: React.FC = () => {
	const [isModalActive, setModalState] = useState(false);

	const onClickHandler = () => {
		setModalState(!isModalActive);
	};

	return (
		<>
			<div className='min-h-screen bg-slate-400 grid grid-cols-[225px]'>
				<Sidebar onClickHandler={onClickHandler} />
				<main></main>
			</div>
			{isModalActive && <NewGroupModal onClickHandler={onClickHandler} />}
		</>
	);
};

export default Layout;
