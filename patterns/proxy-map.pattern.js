// https://www.patterns.dev/vanilla/proxy-pattern
const personProxy = new Proxy(new Map(), {
    get: (obj, prop) => {
        console.log(`get obj ${JSON.stringify(Object.fromEntries(obj))}`);
        console.log(`The value of ${prop} is ${obj.get(prop)}`);
    },
    set: (obj, prop, value) => {
        console.log(`Changed ${prop} from ${obj.get(prop)} to ${value}`);
        obj.set(prop, value);
    },
});

personProxy.age = 37;
personProxy.name = 'Aliya';
console.log(personProxy.age);
console.log(personProxy.name);
