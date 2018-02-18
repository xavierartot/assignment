module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      2, 2
    ],
    'linebreak-style': [
      0, 'unix'
    ],
    'quotes': [
      0, 'single'
    ],
    'semi': [
      1,'never'
    ],
    'no-unused-vars': 1,
    'no-console': 0
  }
}
