/** @type {import('jest').Config} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*).svg\\?react$': '<rootDir>/src/test-utils/mocks/svg.ts',
    '\\.(css|scss|less)$': '<rootDir>/src/test-utils/mocks/css.ts',
    'swiper/css': '<rootDir>/src/test-utils/mocks/css.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts',
    '<rootDir>/src/test-utils/configure-rtl.ts',
    '<rootDir>/src/test-utils/mocks/env-vars.ts',
    '<rootDir>/src/test-utils/mocks/swiper.tsx',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
