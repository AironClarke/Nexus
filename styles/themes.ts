import type { Themes } from 'types/styles/themes';
import vantaWaves from 'utils/vantaWaves';

const defaultTheme = {
  colors: {
    background: '#000',
    primary: '#000',
    window: '#808080'
  },
  wallpaper: vantaWaves
};

const themes: Themes = { defaultTheme };

export default themes;
