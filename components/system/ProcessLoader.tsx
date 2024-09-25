import { ProcessContext } from 'context/process';
import type { FC } from 'react'; // Import FC
import React, { useContext } from 'react';

import Window from './Window';

const ProcessLoader: FC = () => {
  const { processes } = useContext(ProcessContext);

  return (
    <>
      {Object.entries(processes).map(([id, { Component, hasWindow }]) =>
        hasWindow ? (
          <Window key={id}>
            <Component />
          </Window>
        ) : (
          <Component key={id} />
        )
      )}
    </>
  );
};

export default ProcessLoader;
