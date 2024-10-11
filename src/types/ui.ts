import { ReactNode } from 'react';

export type ModalState<T = undefined> = {
  isOpen: boolean;
  payload?: T;
};

export type ToastState = {
  isOpen: boolean;
  message: ReactNode;
  severity?: 'info' | 'error' | 'success';
  autoHide?: boolean;
};
