module.exports = {
    //    "env": {
    //        "node": true,
    //        "browser": true
    //    },
    extends: [
        'react-app',
        //        "plugin:jsx-a11y/recommended"
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
            experimentalObjectRestSpread: true,
        },
    },
    ignorePatterns: ['/src/pages/typescript/**/*', '/src/**/*.js', '**/tests/**/*'],
    plugins: [
        //        "jsx-a11y",
        //        "@typescript-eslint"
    ],
    // add new rules here
    rules: {
        //        "no-console": ["warn", { "allow": ["warn", "error"] }],
        'react/no-array-index-key': ['error'],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'enumMember',
                format: ['PascalCase'],
            },
        ],
        'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
        'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
        // function a(_param: string) } так отработает
        'no-unused-vars': [
            'warn',
            {
                args: 'all',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                args: 'all',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
            },
        ],
    },
    // override "react-app" rules
    overrides: [
        {
            files: ['**/*.(j|t)s?(x)'],
            excludedFiles: './src/tests/**/*',
            rules: {
                'array-callback-return': 'off',
            },
        },
    ],
};
