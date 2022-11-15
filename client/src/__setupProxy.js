// // const { createProxyMiddleware } = require('http-proxy-middleware');
//
// const proxyHeaders = {
//     'X-Forwarded-Host': 'localhost:3000',
//     'X-Forwarded-Proto': 'http',
// };
//
// module.exports = function (app) {
//     //webpack needs index.html, but we have to redirect to portal http://localhost:8080 page without /index.html path
//     app.use(
//         process.env.PUBLIC_URL + '/index.html',
//         createProxyMiddleware({
//             target: 'http://localhost:8080',
//             secure: false,
//             logLevel: 'debug',
//             pathRewrite: {
//                 '/index.html': '/',
//             },
//             headers: proxyHeaders,
//         })
//     );
//     // example
//     app.use(
//         '/api',
//         createProxyMiddleware({
//             target: 'http://localhost:8080',
//             secure: false,
//             changeOrigin: true,
//             logLevel: 'debug',
//         })
//     );
//     app.use(
//         '/o/nc-react-static/js/*',
//         createProxyMiddleware({
//             target: 'http://localhost:3000',
//             secure: false,
//             logLevel: 'debug',
//             pathRewrite: {
//                 '^/o/nc-react-static/js': '/static/js',
//             },
//         })
//     );
//     app.use(
//         '/o/nc-react-static/css/*',
//         createProxyMiddleware({
//             target: 'http://localhost:3000',
//             secure: false,
//             logLevel: 'debug',
//             pathRewrite: {
//                 '/o/nc-react-static/css': '/static/css',
//             },
//         })
//     );
//     app.use(
//         '/html/common/nc/localization/*',
//         createProxyMiddleware({
//             target: 'http://localhost:3000',
//             secure: false,
//             logLevel: 'debug',
//             pathRewrite: {
//                 '/html/common/nc/localization': '',
//             },
//         })
//     );
//         app.use(
//             process.env.PUBLIC_URL + '/showcase.html/**',
//             createProxyMiddleware({
//                 target: 'http://localhost:3000',
//                 changeOrigin: true,
//                 logLevel: 'debug',
//                 headers: proxyHeaders,
//                 secure: false,
//                 pathRewrite: function (path, req) {
//                     return path.replace(/showcase.html\/.*/, 'showcase.html');
//                 },
//             })
//         );
//     app.use(
//         '*',
//         //тут hot-update чтобы все запросы с ним проксировать на 8080
//         createProxyMiddleware(
//             path =>
//                 !/^\/(static|manifest\.json|locales|favicon\.ico|images|plugins|scripts|.*\.hot-update\..*)/.test(path),
//             {
//                 target: 'http://localhost:8080',
//                 changeOrigin: true,
//                 logLevel: 'debug',
//                 headers: proxyHeaders,
//                 secure: false,
//             }
//         )
//     );
// };
