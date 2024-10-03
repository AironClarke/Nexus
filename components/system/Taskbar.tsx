import type { FC } from 'react';
import StyledTaskbar from 'styles/components/StyledTaskbar';

import Clock from './Clock';
import StartButton from './StartButton';
import TaskbarEntries from './TaskbarEntries';

const Taskbar: FC = () => (
  <StyledTaskbar>
    <StartButton />
    <TaskbarEntries />
    <Clock />
  </StyledTaskbar>
);

export default Taskbar;
