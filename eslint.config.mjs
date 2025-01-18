// @ts-check

import { FlatCompat } from "@eslint/eslintrc";
import { default as eslint, default as js } from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import perfectionist from "eslint-plugin-perfectionist";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const config = [
  ...tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.strictTypeChecked,
  ),
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  perfectionist.configs["recommended-alphabetical"],
  {
    ignores: [
      "jest.config.js",
      "eslint.config.mjs",
      "next.config.ts",
      "report-bundle-size.js",
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  eslintConfigPrettier,
];

export default config;
