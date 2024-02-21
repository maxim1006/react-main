const express = require('express');
const cors = require('cors');
const PORT = 5000;
const events = require('events');

const emitter = new events.EventEmitter();

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Long polling');
});

app.get('/connect-messages', (req, res) => {
    // для server events нужны следующие заголовки
    res.writeHead(200, {
        'Connection': 'keep-alive',
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
    });
    emitter.on('newMessage', message => {
        // это обязательный паттерн для эвент соурсинга `data: ${message} \n\n`
        res.write(`data: ${JSON.stringify(message)} \n\n`);
    });
});

app.post('/post-messages', (req, res) => {
    const message = req.body;
    emitter.emit('newMessage', message);
    res.status(200).end();
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
