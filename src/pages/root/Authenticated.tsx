import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import { Toast } from '@/components';
import { ROUTE } from '@/constants';
import { useSelector } from '@/hooks';
import { selectUIState } from '@/redux';

import { HomePage } from '../home';
import { AuthRootContainer } from './Root.styled';

const authorizedRoutes: RouteObject[] = [
  {
    path: ROUTE.HOME,
    element: <HomePage />,
  },
  {
    path: '*',
    element: <Navigate to={ROUTE.HOME} />,
  },
];

export function AuthenticatedPage() {
  const { toast } = useSelector(selectUIState);
  const authElements = useRoutes(authorizedRoutes);

  return (
    <AuthRootContainer>
      {authElements}
      <Toast
        open={toast.isOpen}
        message={toast.message}
        severity={toast.severity}
        autoHide={toast.autoHide}
      />
    </AuthRootContainer>
  );
}
