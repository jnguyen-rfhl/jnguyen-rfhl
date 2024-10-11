import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

export const selectUIState = createSelector(
  (state: RootState) => state.ui,
  data => ({
    ...data,
  }),
);
