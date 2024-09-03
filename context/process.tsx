import type { FC } from 'react';
import processDirType from 'utils/processDir';

const ProcessLoader: FC = () => (
  <>
    {Object.entries(processDirType).map(([id, { Component }]) => (
      <Component key={id} />
    ))}
  </>
);

export default ProcessLoader;
