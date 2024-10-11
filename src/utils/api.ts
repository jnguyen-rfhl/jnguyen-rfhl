import { CommonAPIError } from '@/types';

import { AxiosError } from 'axios';

export const sleep = (duration: number) => new Promise(resolve => setTimeout(resolve, duration));

export const getAPIErrorMessage = (
  e: unknown,
  options?: {
    errorField?: string;
    defaultMessage?: string;
  },
) => {
  const error = e as AxiosError<CommonAPIError>;

  const errorTarget = error?.response?.data?.message || error?.message;

  if (errorTarget) {
    if (typeof errorTarget === 'string') {
      return errorTarget;
    } else if (options?.errorField && errorTarget[options.errorField]) {
      return String(errorTarget[options.errorField]);
    }
  }

  return options?.defaultMessage || 'Something went wrong.';
};
