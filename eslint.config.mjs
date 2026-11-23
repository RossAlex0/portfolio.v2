import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs}"],
    rules: {
      quotes: ["warn", "double", { avoidEscape: true }],
      "@typescript-eslint/no-unused-vars": "error",
      "prefer-const": "error",
    },
  },
  globalIgnores([
    ".next/**",
    "node_modules/**",
    "out/**",
    "public/**",
    "next-env.d.ts",
  ]),
]);
