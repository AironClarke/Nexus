import dynamic from 'next/dynamic';
import type { Processes } from 'types/utils/processDir';

const processDir: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('components/apps/HelloWorld'))
  }
};

export default processDir;
