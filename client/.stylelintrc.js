module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-rational-order', 'stylelint-config-standard-scss'],
    rules: {
        'at-rule-no-unknown': null,
        indentation: 4,
        'value-keyword-case': [
            'lower',
            {
                ignoreProperties: ['composes'],
            },
        ],
        'selector-class-pattern': ['.*'],
        'color-function-notation': ['legacy'],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global', 'local', 'export'],
            },
        ],
    },
};
