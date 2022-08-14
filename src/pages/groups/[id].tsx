import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Layout from '@components/Layout';
import { trpc } from '@utils/trpc';

const Group: NextPage = () => {
	const id = useRouter().query.id as string;
	const { data } = trpc.useQuery(['get-group-by-id', { id }]);
	console.log(data);
	return (
		<>
			<Head>
				<title>Get &apos;er done | </title>
			</Head>

			<Layout>Home Page</Layout>
		</>
	);
};

export default Group;
