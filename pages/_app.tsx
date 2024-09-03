import GlobalStyle from 'components/globalstyles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import packageInfo from 'package.json';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'themes/default.json';

const { name, description } = packageInfo;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
