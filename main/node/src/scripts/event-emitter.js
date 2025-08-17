import { EventEmitter } from 'node:events';

const emitter = new EventEmitter();

emitter.on('customEvent', data => console.log('customEvent data ', data));
emitter.once('singleEvent', _ => console.log('singleEvent'));
emitter.on('removableEvent', removableEventCb);

emitter.emit('customEvent', { name: 'Max' });
emitter.emit('singleEvent');
emitter.emit('singleEvent');
emitter.emit('singleEvent');
emitter.emit('removableEvent');

emitter.removeListener('removableEvent', removableEventCb);

emitter.emit('removableEvent');

setTimeout(() => {
    emitter.removeAllListeners();
}, 5000);

// helpers
function removableEventCb() {
    console.log('removableEvent');
}
