import { createAction } from '@reduxjs/toolkit';

import { ToastState } from '@/types';

export const showToast = createAction<{
  message: ToastState['message'];
  severity?: ToastState['severity'];
}>('ui/show-toast');
export const hideToast = createAction('ui/hide-toast');
