import { createSlice } from '@reduxjs/toolkit';
import { User } from '@/types';
import {
  cancelSignOut,
  notifyUserChanged,
  notifyUserChangedSolved,
  requestSignOut,
  setLoggedInUser,
  signOut,
} from './actions';
import { axios } from '@/api';
import { LS_TOKEN_KEY } from '@/constants';
import { removeLocal } from '@/utils';

interface AuthState {
  initialized: boolean;
  user?: User;
  shouldRefreshUser: boolean;
  isSignOutConfirming?: boolean;
}

const initialState: AuthState = {
  initialized: false,
  shouldRefreshUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(setLoggedInUser, (state, { payload }) => {
      state.user = payload;
      if (!state.initialized) {
        state.initialized = true;
      }
      if (state.shouldRefreshUser) {
        state.shouldRefreshUser = false;
      }
    });
    builder.addCase(notifyUserChanged, state => {
      state.shouldRefreshUser = true;
    });
    builder.addCase(notifyUserChangedSolved, state => {
      state.shouldRefreshUser = false;
    });
    builder.addCase(signOut, state => {
      removeLocal(LS_TOKEN_KEY);
      axios.defaults.headers.common['Authorization'] = undefined;
      state.shouldRefreshUser = true;
      state.isSignOutConfirming = false;
    });
    builder.addCase(requestSignOut, state => {
      state.isSignOutConfirming = true;
    });
    builder.addCase(cancelSignOut, state => {
      state.isSignOutConfirming = false;
    });
  },
});

export const authReducer = authSlice.reducer;
