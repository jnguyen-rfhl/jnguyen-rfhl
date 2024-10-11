import { Alert } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ReactNode, useEffect } from 'react';

import { getUser } from '@/api';
import { useDispatch, useSelector } from '@/hooks';
import { selectAuthState, setLoggedInUser } from '@/redux';
import { getAPIErrorMessage } from '@/utils';

import { Icon } from '../Icon';
import { FullPageBackground, FullPageLoader } from '../Layout';

type AppRouterProps = {
  protectedPage: ReactNode;
  publicPage: ReactNode;
};

export function AuthRouter({ protectedPage, publicPage }: AppRouterProps) {
  const { user, initialized, shouldRefreshUser } = useSelector(selectAuthState);
  const { data, refetch, error } = useQuery({
    queryKey: ['logged-in-user'],
    queryFn: getUser,
    retry: false,
    refetchOnWindowFocus: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (shouldRefreshUser) {
      refetch();
    }
  }, [refetch, shouldRefreshUser]);

  useEffect(() => {
    if (data) {
      dispatch(setLoggedInUser(data.user));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(setLoggedInUser());
    }
  }, [dispatch, error]);

  if (!initialized) {
    return <FullPageLoader />;
  }

  if (user) return protectedPage;

  if (error && ![401, 403].includes((error as AxiosError).response?.status as number)) {
    return (
      <FullPageBackground>
        <Alert icon={<Icon name="warning" />} color="error" variant="standard">
          {getAPIErrorMessage(error)}
        </Alert>
      </FullPageBackground>
    );
  }

  return publicPage;
}
