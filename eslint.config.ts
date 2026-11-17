import { defineConfig, globalIgnores } from "eslint/config";
import { makeTsParserOption } from "@suil0304/suil-lints/eslint/utils";
// recommended
import js from "@eslint/js";
import tslint from "typescript-eslint";
import suilLints from "@suil0304/suil-lints/eslint";
// plugin
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
    globalIgnores([
        "node_modules",
        "./*.config.ts"
    ]),
    {
        files: [
            "./src/**/*.{ts,js}",
            "./test/**/*.{ts,js}"
        ],
        extends: [
            js.configs.recommended,
            tslint.configs.recommended,
            suilLints.recommendedTs
        ],
        languageOptions: {
            parserOptions: makeTsParserOption(import.meta.dirname)
        },
        plugins: {
            "@stylistic": stylistic
        }
    }
]);
