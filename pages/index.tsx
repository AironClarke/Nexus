import { ProcessProvider } from 'context/process';
import ProcessLoader from 'context/system/ProcessLoader';
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <ProcessProvider>
      <ProcessLoader />
    </ProcessProvider>
  );
}
