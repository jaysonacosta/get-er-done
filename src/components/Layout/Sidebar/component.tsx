import React from 'react';

interface SidebarProps {
	onClickHandler: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClickHandler }) => {
	return (
		<div className='bg-slate-600 min-h-screen flex justify-center align-bottom p-5'>
			<div className='h-auto'>
				<button className='bg-gray-300 rounded p-1' onClick={onClickHandler}>
					Create New Group
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
