module.exports = {
  extends: ["universe", "universe/shared/typescript-analysis"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  plugins: ["react-hooks"],
  rules: {
    "import/order": "off",
    "react-hooks/exhaustive-deps": "error",
    "no-duplicate-imports": 2,
    "@typescript-eslint/no-unused-vars": [
      2,
      { argsIgnorePattern: "^_", ignoreRestSiblings: true },
    ],
    "@typescript-eslint/prefer-nullish-coalescing": "off",
  },
  env: {
    node: true,
  },
};
