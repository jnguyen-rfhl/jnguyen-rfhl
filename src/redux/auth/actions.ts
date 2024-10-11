import { User } from '@/types';
import { createAction } from '@reduxjs/toolkit';

export const signOut = createAction('auth/sign-out');

export const setLoggedInUser = createAction<User | undefined>(
  'auth/set-logged-in-user',
);

export const notifyUserChanged = createAction('auth/notify-user-change');
export const notifyUserChangedSolved = createAction(
  'auth/notify-user-change-solved',
);

export const requestSignOut = createAction('auth/request-sign-out');
export const cancelSignOut = createAction('auth/cancel-sign-out');
