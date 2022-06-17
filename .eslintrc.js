module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'linebreak-style': 0,
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
  },
};
