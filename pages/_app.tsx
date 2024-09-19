import MetaData from 'components/Metadata';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyles';
import defaultTheme from 'styles/themes.json';

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
