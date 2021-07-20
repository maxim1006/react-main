// const { createProxyMiddleware } = require('http-proxy-middleware');
//
// module.exports = function (app) {
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
//     app.use(
//         '*',
//         // Put inside ['/fast-buy', '/o'] additional paths that will be proxied from cra dev mode to liferay
//         createProxyMiddleware(['/fast-buy', '/o', '/x/'], {
//             // target: 'http://ws-11180:8082',
//             target: 'http://ws-12602:8082',
//             changeOrigin: true,
//             headers: {
//                 'X-Forwarded-Host': 'localhost:3000',
//                 'X-Forwarded-Proto': 'http',
//             },
//             secure: false,
//         })
//     );
// };
