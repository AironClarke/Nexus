import type { ProcessContextState } from 'types/context/process';
import type { SessionContextState } from 'types/context/session';

export const initialProcessContextState: ProcessContextState = {
  close: () => undefined,
  open: () => undefined,
  processes: {}
};

export const initialSessionContextState: SessionContextState = {
  themeName: '',
  setThemeName: () => undefined
};
