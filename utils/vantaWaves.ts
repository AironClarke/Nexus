import * as THREE from 'three';
import type { WallpaperEffect } from 'types/styles/wallpaper';
// @ts-expect-error no decleration needed
import WAVES from 'vanta/dist/vanta.waves.min';

const vantaWaves: WallpaperEffect = (
  desktopRef: React.RefObject<HTMLElement>
) => {
  if (!desktopRef.current) {
    return () => {}; /* NULL */
  }

  const vantaEffect = WAVES({
    el: desktopRef.current,
    THREE
  });

  return () => {
    vantaEffect?.destroy?.();
  };
};

export default vantaWaves;
