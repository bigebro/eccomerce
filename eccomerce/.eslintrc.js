module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    // Add spacing related rules here
    indent: ["error", 2], // Use 2 spaces for indentation
    // "space-before-function-parent": ["error", "always"], // Space before function parentheses
    "space-infix-ops": "error", // Spaces around operators
    "space-before-blocks": "error", // Space before opening block
    "keyword-spacing": "error", // Space after keywords,
    "prettier/prettier": "error", // Enforce Prettier rules
  },
};
