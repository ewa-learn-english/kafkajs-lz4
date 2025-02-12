import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        files: ['src/**/*.ts', 'test/**/*.ts'],
        ignores: ['*.d.ts'],
        rules: {
            'prettier/prettier': 'error',
        },
        languageOptions: {
            globals: {
                Buffer: true,
                process: true,
                module: true,
            },
        },
    },
    tseslint.configs.recommended,
    eslint.configs.recommended,
    eslintPluginPrettierRecommended
);
