import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth';
import { uiReducer } from './ui';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
