import { ThemeOptions } from '@mui/material/styles';
import { breakpoints, headerHeight, spacing } from './constants/layout';

interface ThemeLayout {
  headerHeight: {
    xs: number;
    md: number;
    lg: number;
  };
}

interface ThemeLayoutOptions {
  headerHeight?: {
    xs?: number;
    md: number;
    lg?: number;
  };
}

declare module '@mui/material/styles' {
  interface Theme {
    layout: ThemeLayout;
  }

  interface ThemeOptions {
    layout?: ThemeLayoutOptions;
  }

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

export const layoutConfigs = {
  shape: {
    borderRadius: 10,
  },
  layout: {
    headerHeight: headerHeight,
  },
  breakpoints: {
    values: breakpoints,
  },
  spacing: spacing,
} as ThemeOptions;
