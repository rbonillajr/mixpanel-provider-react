/* eslint-disable */
import { default as nxPreset } from '@nrwl/jest/preset';

export default {
  displayName: 'mixpanel-provider',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/mixpanel-provider',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  collectCoverageFrom: [
    './src/**',
    '!./src/**.ts',
    '!./src/**/index.ts',
    '!./src/svg/**',
    '!./src/pages/styles/**',
    '!./src/app/**',
    '!./src/main.tsx',
    '!./src/environments/**',
  ],
  coverageReporters: [
    ...nxPreset.coverageReporters,
    'clover',
    'json',
    'lcov',
    'text',
  ],
};
