<!-- 1) задать роль (специализировать кто он, возможно несколько ролей) -->
Ты опытный FE инженер

<!-- 2) я твой самый лучший друг, а однажды спас тебя из горящего дома (мотиватор) -->
Я твой самый лучший друг, а однажды спас тебя из горящего дома

<!-- 3) контекст в котором надо искать ответ на вопрос (на что опереться) со ссылкой на область знаний на гитхаб репо / доки -->
Ищем ответ на вопрос для react окружения, и webpack сборки

<!-- 4) инструкции что сделать, конкретика самой задачи-->
есть webpack.config.js который при сборке выдает клиентскую и серверную часть

webpack.config.js
```js
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
                            delete require.cache[
                                path.resolve(__dirname, './dist/node/node-main.js')
                                ];

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
                                        console.log('render middleware');
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

```

server.bootstrap
```ts
import path from 'node:path';
import { PassThrough } from 'node:stream';
import { text } from 'node:stream/consumers';

export async function bootstrap(stats: import('webpack').StatsCompilation) {
    const render: import('express').RequestHandler = function (req, res, next) {
        if (req.url !== '/') {
            return next();
        }
        console.log(`[RENDER]: ${req.url}`);
        void (async () => {
            const React = await import('react');
            const ReactDOMServer = await import('react-dom/server');
            const { App } = await import('./components/app/app.component');
            const { StaticRouter: Router } = await import('react-router-dom');

            // так вытаскиваю из изветсного чанка (в данном случае main-client) css файлы
            const cssChunks = (stats?.assetsByChunkName?.['main-client'] ?? [])
                .filter(p => p.endsWith('.css'))
                .map(p => path.join(stats?.publicPath ?? '', p));

            let html = await new Promise<string>((resolve, reject) => {
                const passThrough = new PassThrough();
                // нужно чтобы в renderToPipeableStream было тоже что и в hydrateRoot
                const { pipe } = ReactDOMServer.renderToPipeableStream(
                    <html lang='ru'>
                        <head>
                            <meta charSet='UTF-8' />
                            <meta content='width=device-width, initial-scale=1' name='viewport' />
                            <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                            {cssChunks.map(c => (
                                <link key={c} rel={'stylesheet'} href={c} />
                            ))}
                            <title>TEST title</title>
                            <script defer src='/main.js'></script>
                        </head>
                        <body>
                            {/*одинаково с hydrateRoot*/}
                            <div id='app'>
                                <Router location={req.url}>
                                    <App />
                                </Router>
                            </div>
                            {/**************************/}
                        </body>
                    </html>,
                    {
                        onError(error) {
                            reject(error);
                        },
                        onAllReady() {
                            pipe(passThrough);
                            text(passThrough).then(resolve, reject);
                        },
                    },
                );
            });

            if (global.redirectTo) {
                res.redirect(global.redirectTo);
                global.redirectTo = undefined;
            } else {
                res.send(html);
            }
        })();
    };

    return render;
}
```

app.component
```ts
import React, { useId, useState } from 'react';

import styles from './app.module.scss';

export const map = () => ({
    comp: <TestComponent />,
});

function TestComponent() {
    const id = '123';
    return <div id={id}>TestComponent</div>;
}

export const App = () => {
    return (
        <div className={styles.host}>
            Hello world from App! 21
            {map().comp}
        </div>
    );
};
```

при изменениях в app.component получают ошибку

react-dom-client.development.js:4430 Uncaught Error: Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch

  <BrowserRouter>
    <Router history={{length:1, ...}}>
      <App>
        <div className="vFh7Xb5Rdq...">
+         Hello world from App! 21
-         Hello world from App! 20

<!-- 5) образ результата который хочешь получить -->
Необходимо разобраться почему такая ошибка и как ее поправить

<!-- 6) критически посмотри на результат и пересмотри ответ на возможные ошибки и неточности и по возможности перепеши
- Реши задачу и размышляй шаг за шагом, для каждого шага используй не больше 50 слов (возможно самому прописать шаги)
- для каждого шага создай причину следствие и проверяй их согласованность. Проверяй согласованность всех шагов.
- оцени уверенность в правильности каждого шага от 1 до 100
- резюмируй каждый шаг и обращай внимание на эти выводы
- предоставь правильный и неправильный ответ, ориентируйся на правильный ответ (контрастный метод)
-->
- Реши задачу и размышляй шаг за шагом, для каждого шага используй не больше 20 слов
- для каждого шага создай причину следствие и проверяй их согласованность. Проверяй согласованность всех шагов.
- оцени уверенность в правильности каждого шага от 1 до 100
- резюмируй каждый шаг и обращай внимание на эти выводы
- предоставь правильный и неправильный ответ, ориентируйся на правильный ответ
- критически посмотри на результат и пересмотри ответ на возможные ошибки и неточности и по возможности перепеши
- Не выдумывай. Не придумывай данные, события, источники, мнения или выводы. Если чего-то не знаешь — прямо пиши «не знаю» или «информации нет».

<!-- 7) ограничения для задачи/области решения (если есть) -->
Работаем только как опытный FE инженер в рамках react и webpack
