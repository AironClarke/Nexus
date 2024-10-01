import useSessionContextState from 'hooks/useSessionContextState';
import { createContext, type FC, type PropsWithChildren } from 'react';
import type { SessionContextState } from 'types/context/session';
import { initialSessionContextState } from 'utils/initalContextStates';

export const SessionContext = createContext<SessionContextState>(
  initialSessionContextState
);

export const SessionProvider: FC<PropsWithChildren> = ({ children }) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);
