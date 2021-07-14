/* eslint-disable */

// module.exports = {
//   extends: "eslint:recommended"
// };

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "google"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    // "react/react-in-jsx-scope": "off",
    "require-jsdoc": "off",
    "linebreak-style": "off"
  }
};