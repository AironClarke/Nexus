import ProcessLoader from 'components/system/ProcessLoader';
import { ProcessProvider } from 'context/process';
import type { ReactElement } from 'react';
import { getStartupProcesses } from 'utils/processDir';

export default function Home(): ReactElement {
  return (
    <ProcessProvider startupProcesses={getStartupProcesses()}>
      <ProcessLoader />
    </ProcessProvider>
  );
}
