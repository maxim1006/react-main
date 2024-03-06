/*eslint-disable*/
/*********************** Encapsulation ***********************/
interface FamilyMemberModel {
    name: string;
    age: number;
}

class FamilyMember implements FamilyMemberModel {
    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        this._age = value;
    }

    public get id(): string {
        return this._id;
    }

    private _age: number = 0;
    private _name: string = '';
    private readonly _id;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this._id = Date.now() + '';
    }
}

const familyMember = new FamilyMember('Max', 34);
// familyMember.id = 123; // ошибка

/*********************** Inheritance ***********************/
class Person {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }
}

class Worker extends Person {
    private _age: number = 0;

    // не забываем что если есть указатель видимости то тс свойство сразу положит в объект
    constructor(name: string, public occupation: string) {
        super(name);
    }
}

const worker = new Worker('Max', 'developer'); // {"_name": "Max", "occupation": "developer"}

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

/**
 ************************ Composition / Delegation / Aggregation (DI) ***********************
 */
class CEngine {
    drive() {
        console.log('CEngine drive');
    }
}

class CWheel {
    drive() {
        console.log('CWheel drive');
    }
}

class CFreshener {}

class CCar {
    engine: CEngine;
    wheels: CWheel[];
    freshener1: CFreshener;

    // здесь аггрегация (Агрегация – это когда экземпляр двигателя создается где-то в другом месте кода, и передается в конструктор автомобиля в качестве параметра) - это передача CFreshener через DI как инстанс
    constructor(public freshener: CFreshener, freshener1: CFreshener) {
        // это для примера, что можно и так и через public freshener: CFreshener сделать аггрегацию
        this.freshener1 = freshener1;
        this.engine = new CEngine();
        this.wheels = [new CWheel(), new CWheel(), new CWheel(), new CWheel()];
    }

    // делегирование - вызываю методы и двигателя и колес
    drive() {
        this.engine.drive();
        this.wheels.forEach(i => i.drive());
    }
}

/**
 ************************ Dependency Injection ***********************
 */
// Есть 2 слоя
// 1) работа с бизнес логикой 2) с БД
// надо сделать абстракцию (сервис) который бы не зависил от БД
interface UserModel {
    name: string;
}

interface UserRepoModel {
    getUsers: () => UserModel[];
}

class UserMongoDB implements UserRepoModel {
    getUsers = () => {
        return [{ name: 'Max mongo' }];
    };
}

class UserSqlDB implements UserRepoModel {
    getUsers = () => {
        return [{ name: 'Max sql' }];
    };
}

class UserService {
    filterUserByName(name: string) {
        this.userRepo.getUsers().sort((a, b) => a.name.localeCompare(b.name));
    }

    // аггрегация (вставка объекта из DI)
    constructor(public userRepo: UserRepoModel) {}
}

// определили как будет работать UserService извне - это DI
const userService = new UserService(new UserMongoDB());
const userService1 = new UserService(new UserSqlDB());

/**
 ************************ Singleton ***********************
 */
class Singleton {
    public static instance: Singleton;
    public prop: number = 0;

    constructor() {
        if (Singleton.instance) return Singleton.instance;

        this.prop = Math.random();
        console.log(this);

        Singleton.instance = this;
    }
}

new Singleton();
new Singleton();
new Singleton();
new Singleton();

console.log(Singleton.instance.prop);

// 2
class Singleton2 {
    public static instance: Singleton2 = new Singleton2();

    constructor() {
        console.log(123);
    }

    prop = Math.random();
}

console.log(Singleton2.instance.prop, Singleton2.instance.prop, Singleton2.instance.prop); // одно и тоже число 3 раза

// Композиция – это когда двигатель не существует отдельно от автомобиля. Он создается при создании автомобиля и полностью управляется автомобилем. В типичном примере, экземпляр двигателя будет создаваться в конструкторе автомобиля.
class CompositionEngine {}

class CompositionCar {
    private engine: CompositionEngine;

    constructor() {
        this.engine = new CompositionEngine();
    }
}

export {};
