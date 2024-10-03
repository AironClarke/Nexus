import useWallpaper from 'hooks/useWallpaper';
import { type FC, useRef } from 'react';
import StyledDesktop from 'styles/components/StyledDesktop';
import type { DesktopProps } from 'types/components/system/Desktop';

const Desktop: FC<DesktopProps> = ({ children }) => {
  const desktopRef = useRef<HTMLElement>(null);

  useWallpaper(desktopRef);

  return <StyledDesktop>{children}</StyledDesktop>;
};

export default Desktop;
