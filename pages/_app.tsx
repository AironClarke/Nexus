import 'styles/globals.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import packageInfo from 'package.json';

export default function App({ Component, pageProps }: AppProps) {
  const { name, description } = packageInfo;

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
