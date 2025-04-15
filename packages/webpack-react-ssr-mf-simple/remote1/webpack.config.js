const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const mode = process.env.NODE_ENV;
const isProd = mode === 'production';
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const API_HOST = '';
const API_ORIGIN = `https://${API_HOST}`;

const proxy_headers = {
    Host: API_HOST,
    Origin: API_ORIGIN,
    Referer: API_ORIGIN,
};

const getConfig = isServer => {
    return {
        // Это базовая директория для разрешения точек входа (entry points) в Webpack. По умолчанию это текущая рабочая директория.
        context: path.resolve(__dirname, './'),
        // при сборке webpack укажет что конкретно собралось (например [web] Compiled successfully)
        name: isServer ? 'node' : 'web',
        target: isServer ? 'node' : 'web',
        output: isServer
            ? {
                  filename: 'node-[name].js',
                  path: path.join(__dirname, 'dist/node'),
                  globalObject: 'this',
                  libraryTarget: 'umd',
              }
            : {
                  filename: '[name].js',
                  path: path.join(__dirname, 'dist/web'),
                  publicPath: '/',
              },

        mode,
        devtool: isProd ? false : 'source-map',
        stats: 'none',

        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
            plugins: [new TsconfigPathsPlugin()],
        },

        ...(isServer
            ? {
                  devServer: {
                      static: {
                          directory: path.join(__dirname, 'public'),
                      },
                      devMiddleware: {
                          writeToDisk: true,
                      },
                      compress: true,
                      port: 8010,
                      historyApiFallback: true,
                  },
              }
            : {}),

        optimization: {
            minimize: false,
        },

        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-modules-typescript-loader',
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
            ...[].concat([
                new MiniCssExtractPlugin({
                    filename: '[name].css',
                }),
                new UniversalFederationPlugin({
                    name: 'Remote1MfModule',
                    ...(isServer ? { library: { type: 'commonjs-module' } } : {}),
                    isServer, // or false
                    remotes: {},
                    filename: 'remoteEntry.js',
                    // './TestMf' это название сущности которая будет
                    exposes: {
                        './Remote1Mf': './src/test.mf',
                    },
                    shared: {
                        react: {
                            import: false,
                            singleton: true,
                            requiredVersion: pkg.dependencies.react,
                        },
                        'react-dom': {
                            import: false,
                            singleton: true,
                            requiredVersion: pkg.dependencies.react,
                        },
                    },
                }),
            ]),
        ],
    };
};

module.exports = [true, false].map(getConfig);
