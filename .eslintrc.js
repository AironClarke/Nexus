module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'Prettier'
  ],
  globals: { React: 'readonly' },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'react',
    'simple-import-sort',
    'testing-library',
    'jest-dom'
  ],
  ignorePatterns: ['*.config.js', 'next.config.mjs', 'libs'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' }
    ],
    quotes: ['error', 'single'],
    'max-lines': ['error', 90],
    'react/jsx-props-no-spreading': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/comma-dangle': 'off',
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 5
      }
    ],
    'react/function-component-definition': 'off',
    'max-len': ['error', { code: 90 }]
  }
};
