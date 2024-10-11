import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useNavigateBack(fallbackRoute?: string) {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateBack = useCallback(() => {
    if (location.key !== 'default') {
      navigate(-1);
    } else if (fallbackRoute) {
      navigate(fallbackRoute);
    }
  }, [fallbackRoute, location.key, navigate]);

  return navigateBack;
}
