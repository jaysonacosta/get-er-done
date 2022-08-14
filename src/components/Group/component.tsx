import React from 'react';

interface GroupProps {
	title: string;
}

const Group: React.FC<GroupProps> = ({ title }) => {
	return <div className='bg-white rounded p-1 mb-2'>{title}</div>;
};

export default Group;
