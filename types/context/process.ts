import type { ReactNode } from 'react';

export type Process = {
  Component: React.ComponentType;
  hasWindow?: boolean;
};

export type Processes = {
  [id: string]: Process;
};

export type ProcessContextState = {
  processes: Processes;
};

export type ProcessProviderProps = {
  startupProcesses: Processes;
  children: ReactNode;
};
