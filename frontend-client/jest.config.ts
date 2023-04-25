import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  globals: {
    "ts-jest": {
       tsConfigFile: "tsconfig.json"
     },
     TextEncoder: require("util").TextEncoder,
     TextDecoder: require("util").TextDecoder
 },
};

export default config;
