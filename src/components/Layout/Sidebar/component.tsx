import React from 'react';

import { Group } from '@prisma/client';

interface SidebarProps {
	toggleModalActive: () => void;
	groups: Group[] | undefined;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleModalActive: onClickHandler, groups }) => {
	return (
		<div className='bg-slate-600 min-h-screen flex flex-col items-center justify-between p-5'>
			<div className=''>
				{groups &&
					groups.map((group) => {
						return (
							<div
								key={group.id.toString()}
								className='bg-white rounded p-1 mb-2'
							>
								{group.title}
							</div>
						);
					})}
			</div>
			<div className='h-auto'>
				<button className='bg-gray-300 rounded p-1' onClick={onClickHandler}>
					Create New Group
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
