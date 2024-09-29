import { ProcessContext } from 'context/process';
import dynamic from 'next/dynamic';
import type { FC } from 'react'; // Import FC
import React, { useContext } from 'react';

const Window = dynamic(() => import('components/system/Window'));

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
