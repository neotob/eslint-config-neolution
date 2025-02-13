import { config, configs } from "typescript-eslint";

const typescriptRules = config(
  configs.eslintRecommended,
  configs.recommended,
  configs.recommendedTypeChecked.map((rule) => ({
    ...rule,
    files: ["**/*.ts", "**/*.tsx", "**/*.mts"], // We use TS config only for TS files
  })),
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mts"],

    // This is required, see the docs
    languageOptions: {
      parserOptions: {
        project: true,
        parser: "@typescript-eslint/parser",
      },
    },
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
);

export default typescriptRules;
