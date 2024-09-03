import GlobalStyle from 'components/globalstyles';
import MetaData from 'components/Metadata';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'themes/default.json';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaData />
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
