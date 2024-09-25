import Metadata from 'components/pages/Metadata';
import { SessionContext, SessionProvider } from 'context/session';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyles';
import themes from 'styles/themes.json';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const session = useContext(SessionContext);

  return (
    <>
      <Metadata />
      <SessionProvider>
        <>
          <GlobalStyle />
          <ThemeProvider theme={session?.theme || themes.default}>
            <Component {...pageProps} />
          </ThemeProvider>
        </>
      </SessionProvider>
    </>
  );
}
