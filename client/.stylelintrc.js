module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
    customSyntax: 'postcss-less',
    rules: {
        'at-rule-no-unknown': null,
        indentation: 4,
        'string-quotes': 'single',
        'selector-attribute-quotes': 'never',
        'unit-no-unknown': [true, { ignoreUnits: ['vi', 'vb', 'x'] }],
        'property-no-unknown': [true, { ignoreProperties: ['exportedvalue', 'interpolate-size', 'composes'] }],
        'value-keyword-case': [
            'lower',
            {
                // If css-variable is used and has value in camelCase, we need to turn off this rule
                ignoreProperties: ['composes', /^--zain.*grid-area.*$/, 'grid-area', 'vi', 'vb', 'allow-keywords'],
            },
        ],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: [
                    'global',
                    'local',
                    'view-transition-name',
                    'view-transition-old',
                    'view-transition-new',
                    'export',
                ],
            },
        ],
        'selector-class-pattern': null,
        'custom-property-pattern': '.+',
        'function-no-unknown': [
            true,
            {
                ignoreFunctions: ['lighten', 'darken', 'ceil', 'fade', '-'],
            },
        ],
        'declaration-block-no-duplicate-properties': [
            true,
            {
                ignoreProperties: ['mask-image', 'outline', 'type'],
            },
        ],
        'declaration-block-no-redundant-longhand-properties': [
            true,
            {
                ignoreShorthands: ['flex-flow', /grid-.+$/],
            },
        ],
        'property-no-vendor-prefix': null,
        'value-no-vendor-prefix': null,
    },
};
