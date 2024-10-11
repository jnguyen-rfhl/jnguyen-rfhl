import { Props as SimpleBarProps } from 'simplebar-react';
import { StyledSimpleBar } from './Layout.styled';

type OverlayScrollerProps = {
  variant?: 'page' | 'section';
  height?: number;
} & SimpleBarProps;

export function OverlayScroller({
  variant = 'section',
  height,
  ...props
}: OverlayScrollerProps) {
  return (
    <StyledSimpleBar
      style={{
        height:
          height ||
          (variant === 'page'
            ? '100dvh'
            : variant === 'section'
              ? '100%'
              : '100%'),
      }}
      {...props}
    />
  );
}
