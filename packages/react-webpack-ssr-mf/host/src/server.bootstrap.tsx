import fs from 'node:fs';
import path from 'node:path';
import { PassThrough } from 'node:stream';
import { text } from 'node:stream/consumers';

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
            const React = await import('react');
            const ReactDOMServer = await import('react-dom/server');
            const { App } = await import('./App');
            const { StaticRouter: Router } = await import('react-router-dom');

            function makePlaceholder(id: string) {
                function Placeholder() {
                    return <script id={id}></script>;
                }

                const placeholder = ReactDOMServer.renderToString(<Placeholder />);
                return [Placeholder, placeholder] as const;
            }

            // TODO зачем?
            const [InjectMfResources, injectMfResources] =
                makePlaceholder('__inject_mf_resources__');

            const cssChunks = (stats.assetsByChunkName['test-host'] ?? [])
                .filter(p => p.endsWith('.css'))
                .map(p => path.join(stats.publicPath, p));
            let html = await new Promise<string>((resolve, reject) => {
                const passThrough = new PassThrough();
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
                            {/*TODO зачем*/}
                            <script
                                type='application/javascript'
                                dangerouslySetInnerHTML={{
                                    __html: ` window.__env__ = { PLATFORM_COMPOSE_URL: "./platform-compose.yml" };`,
                                }}
                            ></script>
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
        })();
    };

    return render;
}
