module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true
  },
  parser: 'babel-eslint',
  plugins: ['prettier', 'jest', 'filenames', 'eslint-comments', 'flowtype', 'react-perf'],
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:jest/recommended',
    'plugin:flowtype/recommended',
    'plugin:react-perf/recommended',
    'prettier',
    'prettier/react'
  ],
  rules: {
    semi: 'warn',
    strict: 'off',
    'no-console': 'warn',
    'default-case': 'warn',
    'jsx-quotes': ['error', 'prefer-double'],
    'no-return-assign': ['error', 'except-parens'],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    curly: 'error',
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],

    'prettier/prettier': 'error',

    'import/prefer-default-export': 'off',

    'filenames/match-regex': ['error', '^[A-Za-z0-9\\.]+$'],

    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link', 'NavLink'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ],

    'react/require-default-props': 'off',
    'react/no-danger': 'error',
    'react/sort-comp': 'off',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': ['error', { when: 'never', allowMultiline: true, children: true }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-no-bind': 'error',
    'react/jsx-pascal-case': 'error',

    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',

    'flowtype/no-types-missing-file-annotation': 'error',
    'flowtype/generic-spacing': 'off',
    'flowtype/no-weak-types': [
      'warn',
      {
        any: false,
        Object: true,
        Function: true
      }
    ],
    'flowtype/space-after-type-colon': ['error', 'always', { allowLineBreak: true }]
  }
};
