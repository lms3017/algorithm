module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.spec.json' }],
  },
  roots: ['<rootDir>/src', '<rootDir>/__test__'],
  testMatch: ['<rootDir>/__test__/**/*.test.ts'],
};
