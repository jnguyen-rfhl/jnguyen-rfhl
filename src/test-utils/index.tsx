import { CssBaseline, ThemeProvider } from '@mui/material';
import { Store } from '@reduxjs/toolkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RenderOptions, render } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { OverlayScroller } from '@/components';
import { store } from '@/redux';
import { defaultTheme } from '@/styles';

const queryClient = new QueryClient();

type ProvidersProps = {
  store?: Store;
  children: ReactNode;
};

const AllProviders = ({ store: customStore, children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <ReduxProvider store={customStore || store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <OverlayScroller variant="page">{children}</OverlayScroller>
          </ThemeProvider>
        </QueryClientProvider>
      </ReduxProvider>
    </BrowserRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & { store: Store },
) => {
  const { store: customStore, ...restOptions } = options || {};
  return render(ui, {
    wrapper: customStore ? props => <AllProviders store={customStore} {...props} /> : AllProviders,
    ...restOptions,
  });
};

export * from '@testing-library/react';
export { customRender as render };
