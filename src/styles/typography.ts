import { ThemeOptions } from '@mui/material';
import { CSSProperties } from 'react';

import { fontFamily, fontWeight } from './constants/fonts';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body1Bold: CSSProperties;
    body2Bold: CSSProperties;
    captionBold: CSSProperties;
  }

  interface TypographyVariantsOptions {
    body1Bold: CSSProperties;
    body2Bold: CSSProperties;
    captionBold: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body1Bold: true;
    body2Bold: true;
    captionBold: true;
  }
}

export const typographyConfigs: ThemeOptions['typography'] = {
  fontFamily: fontFamily.primary,
  fontWeightRegular: fontWeight.regular,
  fontWeightBold: fontWeight.bold,
  allVariants: {
    lineHeight: 1.375,
  },
  h1: {
    fontSize: '3rem',
    fontWeight: fontWeight.bold,
  },
  h2: {
    fontSize: '2rem',
    fontWeight: fontWeight.bold,
  },
  h3: {
    fontSize: '1.5rem',
    fontWeight: fontWeight.bold,
  },
  h4: {
    fontSize: '1.25rem',
    fontWeight: fontWeight.bold,
  },
  body1: {
    fontSize: '1rem',
  },
  body1Bold: {
    fontSize: '1rem',
    fontWeight: fontWeight.bold,
  },
  body2: {
    fontSize: '0.875rem',
  },
  body2Bold: {
    fontSize: '0.875rem',
    fontWeight: fontWeight.bold,
  },
  caption: {
    fontSize: '0.75rem',
  },
  captionBold: {
    fontSize: '0.75rem',
    fontWeight: fontWeight.bold,
  },
};
