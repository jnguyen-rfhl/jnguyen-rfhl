import { PropsWithChildren } from 'react';

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: PropsWithChildren) => (
    <div data-testid="swiper">{children}</div>
  ),
  SwiperSlide: ({ children }: PropsWithChildren) => (
    <div data-testid="swiper-slide">{children}</div>
  ),
}));

jest.mock('swiper/modules', () => ({
  Navigation: () => null,
  Pagination: () => null,
  Scrollbar: () => null,
  A11y: () => null,
}));
