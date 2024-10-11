import { Box, Drawer, styled } from '@mui/material';

export const StyledSignOutDrawer = styled(Drawer)(() => ({
  '.MuiDrawer-paper': {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
}));

export const SignOutDrawerContainer = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(4),
  width: '100%',

  '.MuiButton-root': {
    display: 'block',
    margin: `0 auto`,
  },
}));
