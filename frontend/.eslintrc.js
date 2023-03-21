module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': ['warn', 'unix'],
    quotes: ['error', 'single'],
    semi: ['warn', 'always'],
    'eol-last': ['warn', 'always'],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: false,
        varsIgnorePattern: '^_'
      }
    ],
    'implicit-arrow-linebreak': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prettier/prettier': ['warn', { singleQuote: true, printWidth: 120, parser: 'flow', trailingComma: false }],
    'prefer-destructuring': ['warn', { array: true, object: true }],
    'comma-dangle': ['error', 'never']
  },
};