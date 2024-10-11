import { useEffect } from 'react';

export function useScrollTop() {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);
}
