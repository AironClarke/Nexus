// eslint-disable-next-line max-len
import useProcessContextState from 'hooks/useProcessContextState';
import { createContext, type FC } from 'react';
import type {
  ProcessContextState,
  ProcessProviderProps
} from 'types/context/process';
import { initalProcessContextState } from 'utils/initalContextStates';

export const ProcessContext = createContext<ProcessContextState>(
  initalProcessContextState
);

export const ProcessProvider: FC<ProcessProviderProps> = ({
  children,
  startupProcesses
}) => (
  <ProcessContext.Provider value={useProcessContextState(startupProcesses)}>
    {children}
  </ProcessContext.Provider>
);
