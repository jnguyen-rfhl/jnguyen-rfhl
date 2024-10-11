import { IconButton, Portal, Snackbar, SnackbarProps, Typography } from '@mui/material';

import { TOAST_DURATION } from '@/constants';
import { useDispatch } from '@/hooks';
import { hideToast } from '@/redux';

import { Icon } from '../Icon';

type ToastProps = {
  onClose?: () => void;
  severity?: 'info' | 'success' | 'error';
  autoHide?: boolean;
} & Omit<SnackbarProps, 'onClose'>;

export function Toast({
  message,
  onClose,
  severity = 'info',
  autoHide = true,
  ...props
}: ToastProps) {
  const dispatch = useDispatch();

  const hide = () => {
    onClose?.();
    dispatch(hideToast());
  };

  return (
    <Portal>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={autoHide ? TOAST_DURATION : undefined}
        onClose={hide}
        {...props}
        className={`toast-${severity}`}
        message={
          <>
            <Typography variant="body2Bold">{message}</Typography>
            {!autoHide && (
              <IconButton onClick={hide}>
                <Icon name="x" />
              </IconButton>
            )}
          </>
        }
      />
    </Portal>
  );
}
