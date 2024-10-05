import Desktop from 'components/system/Desktop';
import ProcessLoader from 'components/system/Processes/ProcessLoader';
import { ProcessProvider } from 'context/process';
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <ProcessProvider>
      <Desktop>
        <ProcessLoader />
      </Desktop>
    </ProcessProvider>
  );
}
