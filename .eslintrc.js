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
    'testing-library'
  ],
  ignorePatterns: ['*.config.js'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' }
    ],
    quotes: ['error', 'single'],
    'max-lines': ['error', 80],
    'react/jsx-props-no-spreading': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/comma-dangle': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true, minProperties: 5 },
        ObjectPattern: { multiline: true, minProperties: 5 },
        ImportDeclaration: { multiline: true, minProperties: 5 },
        ExportDeclaration: { multiline: true, minProperties: 5 }
      }
    ],
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 5
      }
    ]
  }
};
