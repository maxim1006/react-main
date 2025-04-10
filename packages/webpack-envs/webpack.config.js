const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const mode = process.env.NODE_ENV;
const isProd = mode === 'production';
const CopyPlugin = require('copy-webpack-plugin');
/**
 * https://www.npmjs.com/package/dotenv-webpack
 * переношу все переменные автоматом из .env
 * ENV1=env1
 * ENV2=env1
 *
 * также как и связка
 * require('dotenv').config(); // ← загружаем .env
 *
 * module.exports = {
 *   plugins: [
 *     new webpack.DefinePlugin({
 *       'process.env.API_URL': JSON.stringify(process.env.API_URL),
 *     }),
 *   ],
 * };
 *
 * также сделал пример для формирования route.js командой
 * export ENV1=windowEnv1 ENV2=windowEnv2 && npm run generate:envs
 * прокидываю пару переменных и загружаю их из window чтобы получить в рантайме
 */
const Dotenv = require('dotenv-webpack');

module.exports = {
    // Это базовая директория для разрешения точек входа (entry points) в Webpack. По умолчанию это текущая рабочая директория.
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
        setupMiddlewares(middlewares, devServer) {
            devServer.compiler.hooks.done.tap('Render', () => {
                /**
                 * \x1b[32m — код для зелёного цвета.
                 * \x1b[34m — код для синего цвета.
                 * \x1b[0m — сбрасывает форматирование, чтобы остальные строки не окрашивались.
                 */
                console.log(
                    'Render',
                    '\x1b[32m' + process.env.ENV1 + '\x1b[0m',
                    '\x1b[34m' + process.env.ENV2 + '\x1b[0m',
                ); // переменные окружения windowEnv1 windowEnv2 которые передал при старте npm
            });

            return middlewares;
        },
    },

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
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
        new HtmlWebPackPlugin({
            template: './src/index.html',
        }),
        ...[].concat(
            isProd
                ? [
                      new MiniCssExtractPlugin({
                          filename: '[name].css',
                      }),
                  ]
                : [],
        ),
        // to the dist root directory
        new CopyPlugin({
            patterns: [{ from: './public', to: '' }],
        }),
        new Dotenv({}),
    ],
};
