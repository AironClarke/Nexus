import { ProcessContext } from 'context/process';
import { useContext } from 'react';
import type { Process } from 'types/context/process';

import RenderProcess from './RenderProcess';

const RenderProcesses = ([id, process]: [string, Process]) => (
  <RenderProcess key={id} {...process} />
);

const ProcessLoader = (): JSX.Element => {
  const { processes } = useContext(ProcessContext);

  return <>{Object.entries(processes).map(RenderProcesses)}</>;
};

export default ProcessLoader;
