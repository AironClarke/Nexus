import { ProcessContext } from 'context/process';
import { useContext } from 'react';
import StyledTaskbarEntries from 'styles/components/system/Taskbar/StyledTaskbarEntries';

import TaskbarEntry from './TaskbarEntry';

const TaskbarEntries = (): JSX.Element => {
  const { processes } = useContext(ProcessContext);

  return (
    <StyledTaskbarEntries>
      {Object.entries(processes).map(([id, { icon, title }]) => (
        <TaskbarEntry key={id} icon={icon} title={title} />
      ))}
    </StyledTaskbarEntries>
  );
};

export default TaskbarEntries;
