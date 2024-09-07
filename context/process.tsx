// eslint-disable-next-line max-len
import {
  createContext,
  type FC,
  type PropsWithChildren,
  useMemo,
  useState
} from 'react';
import type { ProcessContextState } from 'types/context/process';
import processDir from 'utils/processDir';

export const ProcessContext = createContext<ProcessContextState>({
  processes: {}
});

export const ProcessProvider: FC<PropsWithChildren> = ({ children }) => {
  const [processes] = useState(processDir);

  // Memoize the value to keep the object reference stable between renders
  const processesMemo = useMemo(() => ({ processes }), [processes]);

  return (
    <ProcessContext.Provider value={processesMemo}>
      {children}
    </ProcessContext.Provider>
  );
};
