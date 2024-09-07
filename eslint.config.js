import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import * as eslintImportResolverTs from 'eslint-import-resolver-typescript';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  files: ['**/*.ts'],
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 2022,
    globals: { ...globals.node, vitest: true },
    parserOptions: {
      project: ['./tsconfig.json'],
    },
  },
  plugins: {
    eslintImportResolverTs,
    prettierConfig,
  },
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
      },
    ],
    complexity: ['error', 8],
    eqeqeq: ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'max-nested-callbacks': ['error', 3],
    'max-statements': [
      'error',
      {
        max: 20,
      },
    ],
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-multi-spaces': 'error',
    'no-param-reassign': 'error',
    'no-trailing-spaces': 'error',
    'no-undefined': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: '*',
        prev: ['const', 'let', 'var', 'if'],
      },
      {
        blankLine: 'always',
        next: ['const', 'let', 'var', 'if'],
        prev: '*',
      },
      {
        blankLine: 'any',
        next: ['const', 'let', 'var'],
        prev: ['const', 'let', 'var'],
      },
    ],
    'require-await': 'error',
  },
});
