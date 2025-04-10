/*eslint-disable*/

/**
 ************************ Polymorphism ***********************
 */
// poly - много morph - форма - много форм
// Принцип позволяющий одному и тому же фрагменту кода работать с разными типами данных
// Параметрический (Истинный)
class PPerson {
    constructor(protected name: string = 'Person') {}
    greeting() {
        return this.name;
    }
}

// переопределил метод - полиморфизм
class PWorker extends PPerson {
    name: string = 'PWorker';
    greeting() {
        return 'PWorker name: ' + this.name;
    }
}

class PUnnamed extends PPerson {
    greeting() {
        return 'PUnnamed name: ' + this.name;
    }
}

const pPerson = new PPerson();
const pWorker = new PWorker();
const pUnnamed = new PUnnamed();

// тут стоит обратить внимание что вывелось разное приветствие несмотря на то что тип один и тотже - это и называется полиморфизм
const personList: PPerson[] = [pPerson, pWorker, pUnnamed];
personList.forEach(i => i.greeting()); // "Person",  "PWorker name: PWorker",  "PUnnamed name: Person"

// ad-hoc (мнимый) один метод работает как бы с 2мя типами данных, за счет перегрузки методов
class Calculator {
    add(a: number): number;
    add(a: number, b?: string): number | string {
        if (typeof a === 'number') {
            return a;
        }

        return a + b;
    }
}

class Car {
    public static drive(speed: number): string;
    public static drive(speed: number, target: number): number[];
    public static drive(speed: number, target?: number): string | number[] {
        if (target) {
            const arr: number[] = [];

            for (let i = speed; i <= target; i++) {
                arr.push(i);
            }

            return arr;
        }

        return `Car is driving with ${speed} km/h.`;
    }
}

// пример полиморфизма через интерфейсы, интерфейс определяет только публичный контракт
interface Shape {
    type: string;
    getArea(): number;
}

class Square implements Shape {
    public type = 'square';

    private readonly _area: number;

    constructor(public x: number) {
        this._area = x ** 2;
    }

    getArea(): number {
        return this._area;
    }
}

class Circle implements Shape {
    public type = 'circle';

    private readonly _area: number;

    constructor(public radius: number) {
        this._area = Math.PI * radius ** 2;
    }

    getArea(): number {
        return this._area;
    }
}

console.log([new Square(2), new Circle(3)].map(i => i.getArea()));
