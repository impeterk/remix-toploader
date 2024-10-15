import typescriptEslint from "@typescript-eslint/eslint-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/dist/"],
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    rules: {
        quotes: ["error", "single"],
        semi: ["error", "always"],
        "eol-last": ["error", "always"],

        "comma-dangle": ["error", {
            arrays: "always-multiline",
            objects: "always-multiline",
            imports: "always-multiline",
            exports: "always-multiline",
            functions: "never",
        }],

        "arrow-parens": ["error", "always"],

        "no-trailing-spaces": ["error", {
            skipBlankLines: true,
        }],

        "prefer-const": "warn",
        "accessor-pairs": "off",
        "no-async-promise-executor": "off",
        "no-unused-vars": "off",
        "node/no-missing-require": "off",
        "no-console": "warn",
    },
}];