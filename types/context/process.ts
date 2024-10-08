import type { ReactNode } from 'react';

export type Process = {
  Component: React.ComponentType;
  hasWindow?: boolean;
  icon: string;
  title: string;
};

export type Processes = {
  [id: string]: Process;
};

export type ProcessContextState = {
  processes: Processes;
  close: (id: string) => void;
  open: (id: string) => void;
};

export type ProcessProviderProps = {
  children: ReactNode;
};
