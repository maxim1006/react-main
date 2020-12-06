module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'airbnb',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'max-len': ['error', {
            code: 120,
        }],
        indent: ['error', 4, {
            SwitchCase: 1,
        }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'import/no-cycle': 1,
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'import/no-unresolved': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
    },
};
