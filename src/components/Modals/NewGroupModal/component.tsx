import { trpc } from '@utils/trpc';
import React from 'react';
import { useState } from 'react';

interface NewGroupModalProps {
	onClickHandler: () => void;
}

const NewGroupModal: React.FC<NewGroupModalProps> = ({ onClickHandler }) => {
	const [title, setTitle] = useState('');

	const newGroup = trpc.useMutation('create-group');

	const createNewGroup = () => {
		newGroup.mutate({ title });
		onClickHandler();
	};

	return (
		<div className='min-h-screen min-w-screen fixed top-0 bottom-0 left-0 right-0 bg-gray-500/50 flex justify-center items-center'>
			<div className='h-96 w-80 bg-white rounded flex flex-col p-5 justify-between'>
				<div className='flex flex-col'>
					<label>Title</label>
					<input
						type='text'
						className='bg-slate-200 rounded p-1'
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<button
					className='bg-slate-500 text-white p-2 rounded'
					onClick={createNewGroup}
				>
					Create
				</button>
			</div>
		</div>
	);
};

export default NewGroupModal;
