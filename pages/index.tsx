import Desktop from 'components/system/Desktop';
import FileManager from 'components/system/Files/FileManager';
import ProcessLoader from 'components/system/Processes/ProcessLoader';
import Taskbar from 'components/system/Taskbar';
import { ProcessProvider } from 'context/process';
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <ProcessProvider>
      <Desktop>
        <FileManager />
        <Taskbar />
        <ProcessLoader />
      </Desktop>
    </ProcessProvider>
  );
}
