import { Components, createTheme } from '@mui/material';

import { fontWeight } from '../constants/fonts';
import { layoutConfigs } from '../layout';
import { paletteConfigs } from '../palette';
import { typographyConfigs } from '../typography';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    customColor: true;
  }
  interface ButtonPropsVariantOverrides {
    link: true;
  }
}

const theme = createTheme({
  palette: paletteConfigs,
  typography: typographyConfigs,
  ...layoutConfigs,
});

export const buttonConfigs: Components['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
    disableFocusRipple: true,
    disableRipple: true,
    variant: 'contained',
    color: 'primary',
  },
  variants: [
    {
      props: { variant: 'link' },
      style: {
        padding: 0,
        height: 'unset',
        fontWeight: fontWeight.regular,

        '.MuiButton-startIcon': {
          marginRight: theme.spacing(2),
        },
        '.MuiButton-endIcon': {
          marginLeft: theme.spacing(2),
        },

        ':hover': {
          backgroundColor: 'unset',
          color: theme.palette.primary.main,

          '.MuiButton-startIcon, .MuiButton-endIcon': {
            '.MuiSvgIcon-root': {
              fill: theme.palette.primary.main,
            },
          },
        },
      },
    },
  ],
  styleOverrides: {},
};
