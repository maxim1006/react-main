module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
    rules: {
        indentation: 4,
        'value-keyword-case': [
            'lower',
            {
                ignoreProperties: ['composes'],
            },
        ],
    },
};
