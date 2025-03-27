const path = require('node:path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');
const { UniversalFederationPlugin } = require('@module-federation/node');

const API_HOST = '';
const API_ORIGIN = `https://${API_HOST}`;

const pkg = require('../package.json');

const proxy_headers = {
    Host: API_HOST,
    Origin: API_ORIGIN,
    Referer: API_ORIGIN,
    'X-NO-SECURE-NO-SAMESITE': 1,
};

const getConfig = isServer => {
    const commonSetting = {
        mode: 'development',
        module: {
            rules: [
                {
                    test: /\.(js|mjs|jsx|ts|tsx)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    type: 'asset',
                },
                {
                    test: /\.sass$/,
                    oneOf: [
                        {
                            test: /\.module\.sass$/,
                            use: [
                                MiniCssExtractPlugin.loader,
                                'css-modules-typescript-loader',
                                {
                                    loader: 'css-loader',
                                    options: {
                                        modules: {
                                            localIdentName: '[name]__[local]___[hash:base64:5]',
                                        },
                                        sourceMap: true,
                                    },
                                },
                                {
                                    loader: 'postcss-loader',
                                    options: {
                                        postcssOptions: {
                                            plugins: [require('autoprefixer')],
                                        },
                                    },
                                },
                                'sass-loader',
                            ],
                        },
                        {
                            use: [
                                MiniCssExtractPlugin.loader,
                                'css-loader',
                                {
                                    loader: 'postcss-loader',
                                    options: {
                                        postcssOptions: {
                                            plugins: [require('autoprefixer')],
                                        },
                                    },
                                },
                                'sass-loader',
                            ],
                        },
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
            ],
        },
        optimization: {
            minimize: false,
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            plugins: [new TsconfigPathsPlugin()],
            alias: {
                react: path.resolve('./node_modules/react'),
                'react-dom': path.resolve('./node_modules/react-dom'),
            },
        },
        ...(isServer
            ? {
                  devServer: {
                      devMiddleware: {
                          writeToDisk: true,
                      },
                      static: {
                          directory: path.join(__dirname, 'public'),
                      },
                      hot: false,
                      compress: true,
                      port: 8009,
                      historyApiFallback: true,
                      headers: {
                          'Access-Control-Allow-Origin': '*',
                          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                          'Access-Control-Allow-Headers':
                              'Content-Type, Authorization, X-Requested-With',
                      },
                      setupMiddlewares(middlewares, devServer) {
                          let stats;

                          function clear() {
                              delete require.cache[
                                  path.resolve(__dirname, './dist/node/node-main.js')
                              ];
                              performReload(true);
                          }

                          devServer.compiler.hooks.done.tap('Render', () => {
                              console.log('Render');
                              stats = undefined;
                          });
                          middlewares.unshift({
                              name: 'render',
                              // `path` is optional
                              path: '/',
                              middleware: (req, res, next) => {
                                  console.log('middleware render');

                                  stats =
                                      stats ?? devServer.middleware.context.stats.stats[1].toJson();

                                  try {
                                      delete require.cache[
                                          path.resolve(__dirname, './dist/node/node-main.js')
                                      ];
                                      performReload(true);
                                      require(path.resolve(__dirname, './dist/node/node-main'))
                                          .bootstrap(stats)
                                          .then(render => render(req, res, next));
                                  } catch (e) {
                                      console.error(e);
                                  }
                              },
                          });
                          return middlewares;
                      },
                      proxy: [
                          {
                              onProxyRes: (proxyRes, req, res) => {},
                              onProxyReq: proxyReq => {
                                  Object.keys(proxy_headers).forEach(headerName => {
                                      proxyReq.setHeader(headerName, proxy_headers[headerName]);
                                  });
                              },
                              // если вернет true то запрос будет обработан прокси
                              context: path => {
                                  const res = Boolean(path.match('^/api/'));
                                  return res;
                              },
                              selfHandleResponse: true,
                              target: API_ORIGIN,
                              secure: false,
                          },
                      ],
                  },
              }
            : {}),
        devtool: 'source-map',
        stats: 'none',
    };

    const commonPlugins = [
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
    ];

    return {
        name: !isServer ? 'web' : 'node',
        entry: !isServer
            ? {
                  main: path.join(__dirname, '/src/bootstrap.ts'),
              }
            : path.join(__dirname, '/src/server.bootstrap.tsx'),
        target: !isServer ? 'web' : false,
        output: !isServer
            ? {
                  filename: '[name].js',
                  path: path.join(__dirname, 'dist'),
                  publicPath: '/',
              }
            : {
                  filename: 'node-[name].js',
                  path: path.join(__dirname, 'dist/node'),
                  globalObject: 'this',
                  libraryTarget: 'umd',
              },
        plugins: [
            ...commonPlugins,
            // !isServer
            //   ? new HtmlWebpackPlugin({
            //       template: path.join(__dirname, 'public', 'index.html'),
            //       filename: './index.html',
            //       publicPath: '/',
            //     })
            //   : false,
            new UniversalFederationPlugin({
                name: 'shell', // это будет имя модуля под которым он будет доступен для других приложений
                ...(isServer ? { library: { type: 'commonjs-module' } } : {}),
                isServer, // or false
                remotes: {
                    max_mf_test:
                        'max_mf_test@http://localhost:8007/test-public-path' +
                        (isServer ? '/node/' : '/web/') +
                        'remoteEntry.js',
                },
                filename: 'test-host.js',
                exposes: {},
                shared: {
                    react: {
                        singleton: true,
                        requiredVersion: pkg.dependencies.react,
                    },
                    'react-dom': {
                        singleton: true,
                        requiredVersion: pkg.dependencies.react,
                    },
                },
            }),
            new webpack.DefinePlugin({
                'process.env.PLATFORM_COMPOSE_URL': 'window.__env__.PLATFORM_COMPOSE_URL',
            }),
        ],
        ...commonSetting,
    };
};

module.exports = [true, false].map(getConfig);

// helpers
/* eslint-disable @typescript-eslint/ban-ts-comment */
const nativeRequire = () =>
    // @ts-ignore
    typeof __webpack_require__ === 'function'
        ? // @ts-ignore
          __non_webpack_require__
        : require;

const requireCacheRegex = /(remote|runtime|server|hot-reload|react-loadable-manifest)/;

// сброс кеша вебпак для очистки динамически загружаемых MF модулей
function performReload(shouldReload) {
    if (!shouldReload) {
        return false;
    }
    const req = nativeRequire();
    // @ts-ignore
    globalThis.__remote_scope__ = {
        _config: {},
    };
    // @ts-ignore
    globalThis.backupScope = {};
    // @ts-ignore
    globalThis.factoryTracker = {};
    Object.keys(req.cache).forEach(key => {
        if (requireCacheRegex.test(key)) {
            delete req.cache[key];
        }
    });
    return true;
}
