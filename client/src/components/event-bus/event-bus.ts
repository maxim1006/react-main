import { EventBusModel } from '@app/components/event-bus/event-bus.model';

const eventBus: EventBusModel = {
    subscribers: {},
    subscribe: (name, cb) => {
        if (!eventBus.subscribers[name]) {
            eventBus.subscribers[name] = new Set();
        }

        eventBus.subscribers[name].add(cb);

        return () => eventBus.unsubscribe(name, cb);
    },
    dispatch: (name, ...args) => {
        if (!eventBus.subscribers[name]) return;

        for (let fn of eventBus.subscribers[name]) {
            fn(...args);
        }
    },
    unsubscribe: (name, cb) => {
        if (!eventBus.subscribers[name]) return;

        eventBus.subscribers[name].delete(cb);

        if (!eventBus.subscribers[name].size) eventBus.subscribers[name] = null;
    },
};

export default eventBus;
