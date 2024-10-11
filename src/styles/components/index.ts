import { ThemeOptions } from '@mui/material';

import { buttonConfigs } from './button';
import { buttonBaseConfigs } from './buttonBase';
import { cssBaseLineConfigs } from './cssBaseline';
import { stackConfigs } from './stack';
import { typographyConfigs } from './typography';

export const componentsConfigs: ThemeOptions['components'] = {
  MuiButton: buttonConfigs,
  MuiButtonBase: buttonBaseConfigs,
  MuiCssBaseline: cssBaseLineConfigs,
  MuiStack: stackConfigs,
  MuiTypography: typographyConfigs,
};
