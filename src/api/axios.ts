import _axios, { AxiosError } from 'axios';

import { LS_TOKEN_KEY, VITE_BASE_API_URL } from '@/constants';
import { readLocal, removeLocal } from '@/utils';

export const axios = _axios.create({
  baseURL: VITE_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // .. other options
});

const token = readLocal(LS_TOKEN_KEY);

if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

axios.interceptors.response.use(
  response => response,
  function (error: AxiosError) {
    if (error.response?.status === 401 || error.response?.status === 403) {
      removeLocal(LS_TOKEN_KEY);
      axios.defaults.headers.common['Authorization'] = undefined;
    }

    return Promise.reject(error);
  },
);
