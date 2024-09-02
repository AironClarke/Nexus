import GlobalStyle from 'components/globalstyles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import packageInfo from 'package.json';
import { type DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3'
  }
};

export default function App({ Component, pageProps }: AppProps) {
  const { name, description } = packageInfo;

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
