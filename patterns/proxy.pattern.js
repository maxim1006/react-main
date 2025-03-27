// https://www.patterns.dev/vanilla/proxy-pattern
const person = {
    name: 'Max',
    age: 36,
    nationality: 'RF',
};

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${obj[prop]}`);
        // тоже что и обычный доступ к пропертям
        console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
        return Reflect.get(obj, prop);
    },
    set: (obj, prop, value) => {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
        // obj[prop] = value;
        // тоже что и обычный сет пропертей
        Reflect.set(obj, prop, value);
    },
});

personProxy.age = 37;
personProxy.name = 'Aliya';
console.log(personProxy);
console.log(personProxy.age);
console.log(personProxy.name);
