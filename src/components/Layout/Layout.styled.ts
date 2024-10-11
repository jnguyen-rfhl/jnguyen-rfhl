import { Box, styled } from '@mui/material';
import SimpleBar from 'simplebar-react';

import { doNotForwardTheseProps } from '@/styles';

export const FullPageBackground = styled(Box, {
  shouldForwardProp: doNotForwardTheseProps('bgColor'),
})<{ bgColor?: string }>(({ theme, bgColor }) => ({
  backgroundColor: bgColor || theme.palette.background.paper,
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
}));

export const StyledSimpleBar = styled(SimpleBar)(({ theme }) => ({
  '.simplebar-scrollbar': {
    '::before': {
      backgroundColor: theme.palette.grey[500],
    },
  },
}));
