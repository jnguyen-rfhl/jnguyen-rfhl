import { createSlice } from '@reduxjs/toolkit';

import { ToastState } from '@/types';

import { hideToast, showToast } from './actions';

interface UIState {
  toast: ToastState;
}

const initialState: UIState = {
  toast: {
    isOpen: false,
    message: '',
    severity: 'info',
    autoHide: true,
  },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(showToast, (state, { payload }) => {
      state.toast = {
        isOpen: true,
        severity: 'info',
        autoHide: true,
        ...payload,
      };
    });
    builder.addCase(hideToast, state => {
      state.toast.isOpen = false;
    });
  },
});

export const uiReducer = uiSlice.reducer;
