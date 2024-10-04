import * as THREE from 'three';
import type {
  VantaWavesSettings,
  WallpaperEffect
} from 'types/styles/wallpaper';
// @ts-expect-error no decleration needed
import WAVES from 'vanta/dist/vanta.waves.min';

const disableControls = {
  mouseControls: false,
  touchControls: false
};

const isWebGLAvaliable = typeof WebGLRenderingContext === 'undefined';

const vantaWaves =
  (settings: VantaWavesSettings): WallpaperEffect =>
  (el) =>
  () => {
    const vantaEffect =
      el && isWebGLAvaliable
        ? WAVES({
            el,
            THREE,
            ...disableControls,
            ...settings
          })
        : undefined;

    return () => {
      vantaEffect?.destroy?.();
    };
  };

export default vantaWaves;
