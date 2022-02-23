module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    // enable additional rules
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'off',
    'no-alert': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    // override configuration set by extending "eslint:recommended"
    'no-empty': 'warn',
    'no-cond-assign': ['error', 'always'],

    // disable rules from base configurations
    'for-direction': 'off',
  },
};
