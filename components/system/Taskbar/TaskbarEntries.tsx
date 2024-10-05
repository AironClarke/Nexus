import type { FC } from 'react';
import StyledTaskbarEntries from 'styles/components/system/Taskbar/StyledTaskbarEntries';

import TaskbarEntry from './TaskbarEntry';

const TaskbarEntries: FC = () => (
  <StyledTaskbarEntries>
    <TaskbarEntry />
  </StyledTaskbarEntries>
);

export default TaskbarEntries;
