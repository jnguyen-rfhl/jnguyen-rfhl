import { AxiosError, AxiosHeaders } from 'axios';

import { LS_TOKEN_KEY, REQUEST } from '@/constants';
import { LoginForm, User } from '@/types';
import { saveLocal } from '@/utils';

import { axios } from './axios';

export const getUser = async () => {
  if (!axios.defaults.headers.common['Authorization']) {
    throw new AxiosError('Unauthenticated', '', undefined, undefined, {
      status: 401,
      data: {},
      statusText: 'Unauthenticated',
      config: {
        headers: new AxiosHeaders(),
      },
      headers: new AxiosHeaders(),
    });
  }

  const result = await axios.get<User>(REQUEST.AUTH.INFO);

  return {
    time: Date.now(),
    user: {
      ...result.data,
    } as User,
  };
};

export const login = async (payload: LoginForm) => {
  const result = await axios.post<{ token: string }>(REQUEST.AUTH.LOGIN, payload);

  saveLocal(LS_TOKEN_KEY, result.data.token);

  axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;

  return result.data;
};
