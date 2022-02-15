const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, '../../target/classes/META-INF/resources/lib'),
        filename: 'index.js',
        library: 'google-map-editor',
        libraryTarget: 'umd2',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            }
                        },
                    },
                    'less-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
        ],
    },
};
