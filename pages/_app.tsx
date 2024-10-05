import Metadata from 'components/pages/Metadata';
import StyledApp from 'components/pages/StyledApp';
import { SessionProvider } from 'context/session';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <SessionProvider>
      <StyledApp>
        <Metadata />
        <Component {...pageProps} />
      </StyledApp>
    </SessionProvider>
  );
}
