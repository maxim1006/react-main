/* eslint-disable */
// Type-only Field Declarations
// тут пример в классе Dogs изменения только интерфейса но не самого свойства
interface Animal {
    dateOfBirth: any;
}

interface Dog extends Animal {
    breed: any;
}

class Animals {
    resident: Animal;
    constructor(animal: Animal) {
        this.resident = animal;
    }
}

class Dogs extends Animals {
    // Does not emit JavaScript code,
    // only ensures the types are correct
    declare resident: Dog;
    constructor(dog: Dog) {
        super(dog);
    }
}

/**/
// пример с забавной инициализацией 2х классов
class Base {
    name = 'base';
    constructor() {
        console.log('My name is ' + this.name);
    }
}

class Derived extends Base {
    name = 'derived';
}

// Prints "base", not "derived"
const d = new Derived();

// The order of class initialization, as defined by JavaScript, is:
// The base class fields are initialized
// The base class constructor runs
// The derived class fields are initialized
// The derived class constructor runs

/**/
// this можно задать любой функции в классе первым параметром и в js компиляцию этот параметр не попадет
// TypeScript input with 'this' parameter
// function fn(this: SomeType, x: number) {
//     /* ... */
// }

// JavaScript output
// function fn(x) {
//     /* ... */
// }

// так могу защитить вызов метода с неверным контекстом в классе
class MyClass {
    name = 'MyClass';
    getName(this: MyClass) {
        return this.name;
    }
}
const c = new MyClass();
// OK
c.getName();

// Error, would crash
const g = c.getName;
// console.log(g()); // error The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.

/*Parameter Properties*/
class Params {
    constructor(public readonly x: number, protected y: number, private z: number) {
        // No body necessary
    }
}
const a = new Params(1, 2, 3);
console.log(a.x);
// console.log(a.z); // ошибка private

/*Class Expressions*/
class Test {
    name: string = 'Max';

    constructor(name?: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

let testExpr = new Test();
let name = testExpr.getName();
let name1 = new Test().getName();

/**/
// Static members can also use the same public, protected, and private visibility modifiers:
class MyClass1 {
    private static x = 0;
}
// console.log(MyClass1.x); // error

// Static members are also inherited:
// тут важно что нужено присвоить в myGreeting пропертю в Derived1, чтобы инстанс получил этот метод
class Base1 {
    static getGreeting() {
        return 'Hello world';
    }
}
class Derived1 extends Base1 {
    myGreeting = Derived1.getGreeting();
}

class Derived3 extends Base1 {}

Derived3.getGreeting(); // 'Hello world

var derived1 = new Derived1().myGreeting; // 'Hello world

// превратиться в
// class Base1 {
//     static getGreeting() {
//         return 'Hello world';
//     }
// }
// class Derived1 extends Base1 {
//     constructor() {
//         super(...arguments);
//         this.myGreeting = Derived1.getGreeting();
//     }
// }
// class Derived3 extends Base1 {
// }
// Derived3.getGreeting();
// var derived1 = new Derived1().myGreeting; // 'Hello world

/**/
// static Blocks in Classes
// class Foo {
//     static #count = 0;

//     get count() {
//         return Foo.#count;
//     }

//     static {
//         try {
//             const lastInstances = function() {};
//             Foo.#count += lastInstances.length;
//         }
//         catch {}
//     }
// }

// 2ой пример на наследование static
class C {
    static a = 1;
}
class CC extends C {}
var cc = new CC();
// console.log(CC.a); // 1
// console.log(cc.a); // undefined

// примеры на использование this в статик
// class A {
//     static aS = 1;
//     static fS() {
//         console.log(this.a, this.aS, this);
//     }
//
//     f() {console.log(this.a, this.aS, this);}
//     f1() {console.log(this.a, this.aS, this);}
//
//     a = 1
// }
//
// A.fS(); // undefined 1 class "class A { static aS = 1; static fS() { ... } f() {...);} f1() a = 1}"
//
// var a = new A();
//
// a.f(); // 1 undefined {a: 1}
// a.f1(); // 1 undefined {a: 1}

export default {};
