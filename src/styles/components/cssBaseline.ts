import { Components, createTheme } from '@mui/material';
import { paletteConfigs } from '../palette';

const theme = createTheme({
  palette: paletteConfigs,
});

export const cssBaseLineConfigs: Components['MuiCssBaseline'] = {
  styleOverrides: {
    body: {
      backgroundColor: theme.palette.grey[100],
    },
  },
};
