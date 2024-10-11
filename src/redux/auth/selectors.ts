import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectAuthState = createSelector(
  (state: RootState) => state.auth,
  data => ({ ...data }),
);

export const selectLoggedInUser = createSelector(
  (state: RootState) => state.auth,
  data => data.user,
);
