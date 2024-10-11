import { useEffect } from 'react';

export const usePreload = (url: string | string[]) => {
  useEffect(() => {
    const srcs = typeof url === 'string' ? [url] : url;
    const nodes: HTMLLinkElement[] = [];

    srcs.forEach(src => {
      const node: HTMLLinkElement | null = document.querySelector(
        `link[href*="${src}"]`,
      );

      if (!node) {
        const link = document.createElement('link');

        link.href = src;
        link.rel = 'preload';
        link.as = 'image';

        document.body.appendChild(link);
        nodes.push(link);
      }
    });

    return () => {
      nodes.forEach(node => document.body.removeChild(node));
    };
  }, [url]);
};
