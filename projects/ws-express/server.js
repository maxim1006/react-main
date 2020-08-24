const express = require('express');
const websokify = require('express-ws');
const { v4: uuid } = require('uuid');

class Application {
    constructor(port) {
        this.app = express();
        websokify(this.app);
        this.clients = new Map();

        this.port = process.env.PORT || port;

        this.app.ws('/ws', this.wsController);

        this.app.listen(this.port, () => {
            console.log(`App start on port ${this.port}`);
        });
    }

    wsController = ws => {
        const clientId = uuid();
        this.clients.set(ws, clientId);

        ws.on('message', msg => {
            console.log('message', msg);

            try {
                if (!msg) {
                    return;
                }

                let payload = JSON.parse(msg);
                payload.clientId = clientId;

                switch (payload.type) {
                    case 'ADD_CURRENT_NOTIFICATION':
                        Array.from(this.clients.entries()).forEach(([sockClient, currentClientId]) => {
                            if (currentClientId === payload.clientId) {
                                sockClient.send(JSON.stringify({ ...payload }));
                            }
                        });
                        break;
                }
            } catch (e) {
                console.error(e);
            }
        });

        ws.on('close', error => {
            this.clients.delete(ws);
            console.log(`ws connection close with code ${error}`);
        });
    };
}

new Application(4005);
