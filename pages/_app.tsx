import 'styles/globals.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { name } from 'package.json';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
