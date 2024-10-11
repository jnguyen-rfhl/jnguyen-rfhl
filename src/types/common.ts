import { Theme } from '@mui/material';

import { IconName } from './icon';

export type CommonAPIError = {
  error: string;
  code?: string | number;
  message: string;
};

export type Option = {
  value: string | number;
  text?: string;
  icon?: IconName;
  group?: string;
  groupOrder?: number;
  disabled?: boolean;
};

export type ColorExtractFn = (theme: Theme) => string | undefined;
