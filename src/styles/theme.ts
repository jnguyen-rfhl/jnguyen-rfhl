import { createTheme } from '@mui/material';
import { typographyConfigs } from './typography';
import { componentsConfigs } from './components';
import { paletteConfigs } from './palette';
import { shadowsConfigs } from './shadows';
import { layoutConfigs } from './layout';

export const defaultTheme = createTheme({
  components: componentsConfigs,
  typography: typographyConfigs,
  palette: paletteConfigs,
  shadows: shadowsConfigs,
  ...layoutConfigs,
});
