import { useState } from 'react';
import type { ProcessContextState, Processes } from 'types/context/process';
import { Taskbar } from 'utils/processDir';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState<Processes>({ Taskbar });

  return { processes };
};

export default useProcessContextState;
