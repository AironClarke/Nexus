import dynamic from 'next/dynamic';

import type { Processes } from './processDirType';

const processDir: Processes = {
  HelloWorld: {
    Component: dynamic(() => import('app/HelloWorld'))
  }
};

export default processDir;
