const http = require('http');
// npm i ws (сейчас работает так как уже есть в нод модулях)
const ws = require('ws');

const wss = new ws.Server({ noServer: true });

function accept(req, res) {
    // все входящие запросы должны использовать websockets
    if (!req.headers.upgrade || req.headers.upgrade.toLowerCase() != 'websocket') {
        res.end();
        return;
    }

    // может быть заголовок Connection: keep-alive, Upgrade
    if (!req.headers.connection.match(/\bupgrade\b/i)) {
        res.end();
        return;
    }

    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect);
}

function onConnect(ws) {
    ws.on('message', function(message) {
        console.log('message ', message);
        let { name } = JSON.parse(message);
        ws.send(`Привет с сервера, ${name}!`);

        setTimeout(() => ws.close(1000, 'Пока!'), 5000);
    });
}

if (!module.parent) {
    http.createServer(accept).listen(8080);
} else {
    exports.accept = accept;
}
