import { useEffect } from 'react';

export function useWindowFocus(callback: () => void) {
  useEffect(() => {
    const handler = () => {
      callback();
    };

    window.addEventListener('focus', handler);

    return () => {
      window.removeEventListener('focus', handler);
    };
  }, [callback]);
}
