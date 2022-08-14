import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Get &apos;er done</title>
			</Head>

			<Layout>Home Page</Layout>
		</>
	);
};

export default Home;
