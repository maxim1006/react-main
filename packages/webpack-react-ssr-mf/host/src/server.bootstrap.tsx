import fs from 'node:fs';
import path from 'node:path';
import { PassThrough } from 'node:stream';
import { text } from 'node:stream/consumers';
import Helmet from 'react-helmet';

export async function bootstrap(stats: import('webpack').StatsCompilation) {
    // TODO Зачем?
    // global.__platform_discovery_config__ = jsonData.applications.reduce((acc, it) => {
    //     acc[it.name] = { url: it.urls.server, global: it.exposed_container };
    //     return acc;
    // }, {});

    const render: import('express').RequestHandler = function (req, res, next) {
        if (!(req.url === '/')) {
            return next();
        }
        console.log(`[RENDER]: ${req.url}`);

        void (async () => {
            try {
                const React = await import('react');
                const ReactDOMServer = await import('react-dom/server');
                const { App } = await import('./App');
                const { StaticRouter: Router } = await import('react-router-dom');
                const helmet = Helmet.renderStatic();

                const cssChunks = (stats.assetsByChunkName['main-client'] ?? [])
                    .filter(p => p.endsWith('.css'))
                    .map(p => path.join(stats.publicPath, p));

                let html = await new Promise<string>((resolve, reject) => {
                    const passThrough = new PassThrough();
                    const { pipe } = ReactDOMServer.renderToPipeableStream(
                        <html lang='ru'>
                            <head>
                                <meta charSet='UTF-8' />
                                <meta
                                    content='width=device-width, initial-scale=1'
                                    name='viewport'
                                />
                                <meta content='ie=edge' httpEquiv='X-UA-Compatible' />
                                {helmet.title.toComponent() ?? <title>TEST title</title>}
                                {helmet.meta.toComponent()}
                                {cssChunks.map(c => (
                                    <link key={c} rel={'stylesheet'} href={c} />
                                ))}
                                {/*передаю env переменные*/}
                                <script
                                    type='application/javascript'
                                    dangerouslySetInnerHTML={{
                                        __html: ` window.__env__ = { PLATFORM_COMPOSE_URL: "./platform-compose.yml", API: "http://localhost/api" };`,
                                    }}
                                ></script>
                                {/*основной скрипт из client папки*/}
                                <script defer src='/main.js'></script>
                            </head>
                            <body>
                                <div id='app'>
                                    <Router location={req.url}>
                                        <App />
                                    </Router>
                                </div>
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

                res.send(html);
            } catch (err: unknown) {
                if (isMfError(err)) {
                    res.status(err.status);
                    res.send(`
             <div style="padding:8px 32px; border:4px solid red">
                <h1>${err.status}</h1>
                <pre style="overflow-x:auto">${err.message}</pre>
             </div>
          `);
                    return;
                }
                if (err instanceof Error) {
                    res.send(`
             <div style="padding:8px 32px; border:4px solid red">
                <h1>SSR Error</h1>
                <pre style="overflow-x:auto">${err.stack}</pre>
             </div>
          `);
                }
            }
        })();
    };

    return render;
}

// helpers
function isMfError(val: unknown): val is Error & { status: number } {
    return val instanceof Error && val.name === 'MfError';
}
