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

app.get('/get-messages', (req, res) => {
    // подписываемся на событие и после того как нам придет хоть 1 месседж, эмитим это событие с респонсом о сообщении
    emitter.once('newMessage', message => {
        res.json(message);
    });
});

app.post('/post-messages', (req, res) => {
    const message = req.body;
    emitter.emit('newMessage', message);
    res.status(200).end();
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
