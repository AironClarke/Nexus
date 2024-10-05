import type { DefaultTheme } from 'styled-components/dist/types';
import vantaWaves from 'utils/vantaWaves';

const colors = {
  background: 'blue',
  primary: '#000',
  window: '#808080'
};

const fonts = {
  clock: {
    size: '12px'
  }
};

const sizes = {
  clock: {
    width: '76px'
  },
  startButton: {
    width: '36px'
  },
  taskbar: {
    entry: {
      maxWidth: '160px'
    },
    height: '30px'
  }
};

const wallpaper = vantaWaves({
  color: 0x5588,
  shininess: 35,
  waveHeight: 15,
  waveSpeed: 0.3,
  zoom: 0.9
});

const defaultTheme: DefaultTheme = { colors, sizes, wallpaper, fonts };

export default defaultTheme;
