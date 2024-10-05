import { useState } from 'react';
import type { ProcessContextState } from 'types/context/process';
import { Taskbar } from 'utils/processDir';

const useProcessContextState = (): ProcessContextState => {
  const [processes] = useState({ Taskbar });

  return { processes };
};

export default useProcessContextState;
