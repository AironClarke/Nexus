import useSessionContextState from 'hooks/useSessionContextState';
import { createContext, type FC, type PropsWithChildren } from 'react';
import type { SessionContextState } from 'types/context/session';
// import themes from 'styles/themes.json'

export const SessionContext = createContext<SessionContextState>({
  theme: undefined
});

export const SessionProvider: FC<PropsWithChildren> = ({ children }) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);
