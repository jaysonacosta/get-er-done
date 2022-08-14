import React from 'react';

import Link from 'next/link';

import Group from 'components/Group';

import { trpc } from '@utils/trpc';
interface SidebarProps {
	toggleModalActive: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleModalActive }) => {
	const { data } = trpc.useQuery(['get-all-groups']);

	return (
		<div className='bg-slate-600 min-h-screen flex flex-col items-center justify-between p-5'>
			<div className=''>
				{data &&
					data.map((group) => {
						return (
							<Link key={group.id.toString()} href={`/groups/${group.id}`}>
								<a>
									<Group title={group.title} />
								</a>
							</Link>
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
