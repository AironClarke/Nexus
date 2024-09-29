import type { FC } from 'react';
import StyledDesktop from 'styles/components/StyledDesktop';
import type { DesktopProps } from 'types/components/system/Desktop';

const Desktop: FC<DesktopProps> = ({ children }) => (
  <StyledDesktop>{children}</StyledDesktop>
);

export default Desktop;
