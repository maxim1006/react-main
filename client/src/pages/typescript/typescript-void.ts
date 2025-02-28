// https://www.typescriptlang.org/docs/handbook/2/functions.html#return-type-void
type voidFunc = () => void;

let foo: voidFunc = () => 1; // можно вернуть что угодно будте ок, потом только ругнется если использовать результат функции
// let c = 1 + foo(); // ошибка нельзя сложить number + void

interface ITest<T extends object> {
    (prop: T): void;
}

const foo1: ITest<{ a: 1 }> = prop => {
    console.log(prop.a);
    return prop; // тоже отработает
};

// let b2 = foo1({ a: 1 }) + 2; // ошибка нельзя сложить number + void
