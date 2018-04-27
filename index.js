module.exports = {
  "extends": ["standard", "standard-react"],
  "plugins": ["jest"],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest/globals": true
  },
  "rules": {
    "space-before-function-paren": 0,
    "react/prop-types": 0,
    "react/jsx-no-bind": 0,
    "no-new": 0,
    "object-property-newline": 0,
    "object-curly-spacing": ["error", "always"],
    "eol-last": ["error", "always"],
    "arrow-parens": ["error", "as-needed"],
    "indent": 0,
    "no-return-assign": 0,
    "brace-style": 0,
    "spaced-comment": 0
  }
}