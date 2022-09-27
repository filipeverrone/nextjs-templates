import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>Next Templates</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
