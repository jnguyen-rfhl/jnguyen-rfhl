import { Box, styled } from '@mui/material';

export const AuthRootContainer = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingBottom: theme.spacing(8),
  paddingTop: `calc(${theme.layout.headerHeight.xs + 'px'} + ${theme.spacing(3)})`,
}));
