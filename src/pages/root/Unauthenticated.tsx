import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

import { ROUTE } from '@/constants';

import { GoogleApiKeyCheckerPage } from '../google-api-key-checker';

const unauthorizedRoutes: RouteObject[] = [
  {
    path: ROUTE.GOOGLE_API_KEY_CHECKER,
    element: <GoogleApiKeyCheckerPage />,
  },
  {
    path: '*',
    element: <Navigate to={ROUTE.HOME} />,
  },
];

export function UnauthenticatedPage() {
  const unauthElements = useRoutes(unauthorizedRoutes);

  return unauthElements;
}
