// https://www.patterns.dev/vanilla/singleton-pattern
// 'use strict'; // без этого не отработает freeze на объекте

class Counter {
    counter = 0;
    instance;

    getInstance() {
        if (this.instance) {
            throw new Error('Counter instance already created');
        }

        this.instance = this;

        return this.instance;
    }

    getCount() {
        return this.counter;
    }

    increment() {
        return ++this.counter;
    }

    decrement() {
        return --this.counter;
    }
}

const counterFactory = new Counter();

const Counter1 = counterFactory.getInstance();

console.log({ Counter1 });

// const Counter2 = counterFactory.getInstance();
// console.log({ Counter2 }); // Error: Counter instance already created

// пример с freeze объекта, не могу менять проперти
const obj = {
    prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop); // 42, а если use strict то ошибка
