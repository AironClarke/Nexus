import type { FC } from 'react';
import StyledTaskbarEntries from 'styles/components/StyledTaskbarEntries';

import TaskbarEntry from './TaskbarEntry';

const TaskbarEntries: FC = () => (
  <StyledTaskbarEntries>
    <TaskbarEntry />
  </StyledTaskbarEntries>
);

export default TaskbarEntries;
