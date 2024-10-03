import Taskbar from 'components/system/Taskbar';
import dynamic from 'next/dynamic';
import type { Processes } from 'types/context/process';

const STARTUP_PROCESSES: string[] = ['HelloWorld', 'Taskbar'];

const processDir: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true
  },
  Taskbar: {
    Component: Taskbar,
    hasWindow: false
  }
};

export const getStartupProcesses = (): Processes =>
  STARTUP_PROCESSES.reduce(
    (acc, id) => ({
      ...acc,
      [id]: processDir[id]
    }),
    {}
  );

export default processDir;
