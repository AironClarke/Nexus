import { ProcessContext } from 'context/process';
import type { FC } from 'react'; // Import FC
import React, { useContext } from 'react';

const WindowManager: FC = () => {
  const { processes } = useContext(ProcessContext);

  return (
    <>
      {Object.entries(processes).map(([id, { Component }]) => (
        <Component key={id} />
      ))}
    </>
  );
};

export default WindowManager;
