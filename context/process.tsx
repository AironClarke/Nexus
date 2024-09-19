// eslint-disable-next-line max-len
import useProcessContextState from 'hooks/useProcessContextState';
import { createContext, type FC, type PropsWithChildren } from 'react';
import type { ProcessContextState } from 'types/context/process';
import processDir from 'utils/processDir';

export const ProcessContext = createContext<ProcessContextState>({
  processes: {}
});

export const ProcessProvider: FC<PropsWithChildren> = ({ children }) => (
  <ProcessContext.Provider value={useProcessContextState(processDir)}>
    {children}
  </ProcessContext.Provider>
);
