const http = require('http');

const PORT = process.env.PORT || 3001;

const measure = async () =>
    new Promise(res => {
        setTimeout(res, 2000);
        console.log('measured');
    });

// запуск сервера через http
(async () => {
    // каждый раз когда дергаю запрос на этот сервер то будет дергаться эта функция
    // чтобы дернуть вызываю  curl http://localhost:3001
    http.createServer((_request, response) => {
        response.setHeader('Connection', 'Transfer-Encoding');
        response.setHeader('Content-Type', 'application/json; charset=utf-8');
        response.setHeader('Transfer-Encoding', 'chunked');

        measure(response).then(() => {
            response.end();
        });
    }).listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
})();
