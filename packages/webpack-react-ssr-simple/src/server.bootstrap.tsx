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
            const cssChunks = (stats.assetsByChunkName?.['main-client'] ?? [])
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
