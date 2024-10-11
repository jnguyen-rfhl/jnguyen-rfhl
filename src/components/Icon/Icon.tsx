import { useTheme } from '@mui/material';
import { Cube, Heart, Horse, IconWeight, Question, Warning, X } from '@phosphor-icons/react';

import { ColorExtractFn, IconName } from '@/types';

type IconProps = {
  name: IconName;
  size?: number;
  weight?: IconWeight;
  color?: ColorExtractFn;
};

export function Icon({ name, size = 24, weight, color }: IconProps) {
  const theme = useTheme();

  const props = {
    className: 'Icon',
    style: {
      fontSize: size,
      color: color ? color(theme) : theme.palette.text.primary,
      weight,
    },
  };

  switch (name) {
    case 'cube':
      return <Cube {...props} />;
    case 'heart':
      return <Heart {...props} />;
    case 'horse':
      return <Horse {...props} />;
    case 'warning':
      return <Warning {...props} />;
    case 'x':
      return <X {...props} />;
    case 'question':
    default:
      return <Question {...props} />;
  }
}
