const { rspack } = require('@rspack/core');
const path = require('path');
const mode = process.env.NODE_ENV;
const isProd = mode === 'production';

module.exports = {
    // Это базовая директория для разрешения точек входа (entry points) в rspack. По умолчанию это текущая рабочая директория.
    context: path.resolve(__dirname, './'),
    entry: './src/index.ts',
    mode,
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devtool: isProd ? false : 'inline-source-map',

    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },

    devServer: {
        port: 8081,
        compress: true,
    },

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    isProd ? rspack.CssExtractRspackPlugin.loader : 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },

    plugins: [
        new rspack.HtmlRspackPlugin({
            template: './src/index.html',
        }),
        ...[].concat(
            isProd
                ? [
                      new rspack.CssExtractRspackPlugin({
                          filename: '[name].css',
                      }),
                  ]
                : [],
        ),
        // to the dist root directory
        new rspack.CopyRspackPlugin({
            patterns: [{ from: './public', to: '' }],
        }),
    ],
};
