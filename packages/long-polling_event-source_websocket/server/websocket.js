const ws = require('ws');

const wss = new ws.Server(
    {
        port: 5000,
    },
    () => console.log('Server started on 5000'),
);

wss.on('connection', ws => {
    ws.id = Date.now(); // чтобы сделать комнаты задаю id юзерам и в broadcastMessage проверяю по id чтобы послать message
    // ws - это одно конкретное подключение - один конкретный пользователь
    ws.on('message', message => {
        // возвращаем значение в виде строки !!!
        message = JSON.parse(message);
        switch (message.event) {
            case 'message': {
                broadcastMessage(message);
                break;
            }

            case 'connection': {
                // это для примера, на connection может быть другая логика
                broadcastMessage(message);
                break;
            }
        }
    });
});

// тк в эвенте ws.on('message' аргумент коллбека это ws - те подключение только для 1 пользователя нужна эта функция которая
// заброадкастит сообщение для всех пользователей
function broadcastMessage(message) {
    // wss.clients - это все клиенты у которых на текущий момент установлено подключение
    wss.clients.forEach(client => client.send(JSON.stringify(message)));
}
