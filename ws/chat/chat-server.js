const http = require('http');
const ws = new require('ws');
const wss = new ws.Server({ noServer: true });

const clients = new Set();
const messages = [];

http.createServer((req, res) => {
    // в реальном проекте здесь может также быть код для обработки отличных от websoсket-запросов
    // здесь мы работаем с каждым запросом как с веб-сокетом
    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
}).listen(8080);

function onSocketConnect(ws) {
    clients.add(ws);
    sendMessagesToClients();

    ws.on('message', function(message) {
        messages.push(message.slice(0, 50)); // максимальный размер сообщения 50

        console.log('message ', message);

        sendMessagesToClients();
    });

    ws.on('close', function() {
        clients.delete(ws);
    });
}

function sendMessagesToClients() {
    for (let client of clients) {
        client.send(JSON.stringify(messages));
    }
}
