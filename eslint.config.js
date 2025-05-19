/* eslint-env node */
// import('@rushstack/eslint-patch/modern-module-resolution')

// import vue from "eslint-plugin-vue";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // vue.configs["vue3-recommended"],
  js.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
];
