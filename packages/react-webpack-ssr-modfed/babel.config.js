module.exports = {
    presets: [
        [
            require('@babel/preset-env'),
            {
                corejs: '3.33',
                exclude: ['transform-typeof-symbol'],
                targets: ['>0.2% in RU', 'not dead', 'iOS >= 14'],
                useBuiltIns: 'entry',
                include: undefined,
            },
        ],
        require('@babel/preset-react'),
        [require('@babel/preset-typescript'), { allowDeclareFields: false }],
    ],
};
