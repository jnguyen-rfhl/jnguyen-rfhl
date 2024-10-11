jest.mock('@/constants/configs.ts', () => ({
  VITE_PROD: true,
  VITE_MODE: 'production',
  VITE_BASE_API_URL: undefined,
}));
