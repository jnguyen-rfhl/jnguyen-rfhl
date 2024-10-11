import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as ReduxProvider } from 'react-redux';
import 'simplebar-react/dist/simplebar.min.css';

import { AuthRouter, OverlayScroller } from './components';
import { AuthenticatedPage, UnauthenticatedPage } from './pages/root';
import { store } from './redux';
import { defaultTheme } from './styles';

const queryClient = new QueryClient();

export function App() {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <OverlayScroller variant="page">
              <RootApp />
            </OverlayScroller>
          </ThemeProvider>
        </LocalizationProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
}

function RootApp() {
  return (
    <Box p={2}>
      <AuthRouter protectedPage={<AuthenticatedPage />} publicPage={<UnauthenticatedPage />} />
      {/* Global components */}
    </Box>
  );
}
