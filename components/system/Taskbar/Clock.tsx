import type { FC } from 'react';
import StyledClock from 'styles/components/system/Taskbar/StyledClock';

const Clock: FC = () => (
  <StyledClock dateTime="23:17:22 PM">11:17:22 PM </StyledClock>
);

export default Clock;
