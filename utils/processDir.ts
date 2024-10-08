import dynamic from 'next/dynamic';
import type { Processes } from 'types/context/process';

const processDir: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld')),
    hasWindow: true
  }
};

export default processDir;
