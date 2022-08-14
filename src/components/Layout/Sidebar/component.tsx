import React from 'react';

import { trpc } from '@utils/trpc';
interface SidebarProps {
	toggleModalActive: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleModalActive }) => {
	const { data } = trpc.useQuery(['get-all-groups']);
	console.log(data);
	return (
		<div className='bg-slate-600 min-h-screen flex flex-col items-center justify-between p-5'>
			<div className=''>
				{data &&
					data.map((group) => {
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
				<button className='bg-gray-300 rounded p-1' onClick={toggleModalActive}>
					Create New Group
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
