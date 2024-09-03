import type { ReactElement } from 'react';
import processDir from 'utils/processDir';

export default function Home(): ReactElement {
  return <processDir.HelloWorld.Component />;
}
