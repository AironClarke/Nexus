import RenderProcess from 'components/system/RenderProcess';
import { ProcessContext } from 'context/process';
import { type FC, useContext } from 'react';

const ProcessLoader: FC = () => {
  const { processes } = useContext(ProcessContext);

  return (
    <>
      {Object.entries(processes).map(([id, process]) => (
        <RenderProcess key={id} {...process} />
      ))}
    </>
  );
};

export default ProcessLoader;
