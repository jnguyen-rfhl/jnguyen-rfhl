import { Color, SimplePaletteColorOptions, ThemeOptions, createTheme } from '@mui/material';

import { blue } from './constants/colors';

declare module '@mui/material/styles' {
  interface Palette {
    customColor: SimplePaletteColorOptions;
    primaries: Color;
  }
  interface PaletteOptions {
    customColor: SimplePaletteColorOptions;
    primaries: Color;
  }
}

const {
  palette: { augmentColor },
} = createTheme();

export const paletteConfigs: ThemeOptions['palette'] = {
  mode: 'light',
  primary: augmentColor({ color: blue }),
  customColor: augmentColor({ color: blue }),
  primaries: blue,
};
