import { CircularProgress, CircularProgressProps, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';

import { ColorExtractFn } from '@/types';

import { FullPageBackground } from './Layout.styled';

type FullPageLoaderProps = {
  className?: string;
  color?: CircularProgressProps['color'];
  bgColor?: ColorExtractFn;
} & PropsWithChildren;

export function FullPageLoader({ className, color, children, bgColor }: FullPageLoaderProps) {
  const theme = useTheme();

  return (
    <FullPageBackground className={className} bgColor={bgColor?.(theme)}>
      <CircularProgress color={color} />
      {children}
    </FullPageBackground>
  );
}
