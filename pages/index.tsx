import { ProcessProvider } from 'context/process';
import WindowManager from 'context/system/WindowManager';
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <ProcessProvider>
      <WindowManager />
    </ProcessProvider>
  );
}
