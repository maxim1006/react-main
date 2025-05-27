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
        entry: isServer
            ? path.join(__dirname, '/src/server.bootstrap.tsx')
            : {
                  main: path.join(__dirname, '/src/client.bootstrap.ts'),
              },
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
                  path: path.join(__dirname, 'dist'),
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
                          let serverEntry;

                          // без удаления кеша ноды - будет ошибка в регидрации
                          function clear() {
                              clearWebpackCache('./dist/node');

                              stats =
                                  stats ?? devServer.middleware.context?.stats?.stats[1].toJson();

                              serverEntry = require(
                                  path.resolve(__dirname, './dist/node/node-main'),
                              ).bootstrap(stats);
                          }

                          // отработает когда в host будут изменения
                          devServer.compiler.hooks.done.tap('Render', () => {
                              console.log('compiler hooks tap render');
                              clear();
                          });

                          middlewares.unshift({
                              name: 'render',
                              // `path` is optional
                              path: '/',
                              middleware: (req, res, next) => {
                                  serverEntry
                                      .then(render => {
                                          // console.log('render middleware');
                                          return render(req, res, next);
                                      })
                                      .catch('render middleware error ', console.error);
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
                                  return Boolean(path.match('^/api/'));
                              },
                              selfHandleResponse: true,
                              target: API_ORIGIN,
                              secure: false,
                          },
                      ],
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
            ]),
        ],
    };
};

module.exports = [true, false].map(getConfig);

// helpers
function clearWebpackCache(dir) {
    const resolved = path.resolve(__dirname, dir);
    for (const key in require.cache) {
        if (key.startsWith(resolved)) {
            delete require.cache[key];
        }
    }
}
