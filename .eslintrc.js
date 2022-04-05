module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'jsdoc'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended',
    'plugin:security/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    indent: ['off'],
    radix: 'off',
    semi: ['error', 'always'],
    'comma-dangle': 'off',
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'ignore', ':': 'ignore' } }],
    'max-len': ['error', { code: 120 }],
    'prefer-arrow-callback': 0,
    'consistent-return': 2,
    'security/detect-object-injection': 0,
    'jsdoc/check-examples': 0,
    'jsdoc/check-tag-names': 'error',
    'jsdoc/no-undefined-types': 0,
    'jsdoc/require-returns': 0,
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    'jsdoc/require-jsdoc': [
      1,
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: false,
          FunctionExpression: true,
        },
      },
    ],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
};
