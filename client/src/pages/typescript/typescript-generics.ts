/* eslint-disable */
// Пример объекта
// export interface GModel<T> {
//     [prop: string]: T;
// }
//
// const gModel: GModel<string> = {
//     a: "1"
// };

// Пример функции
// function identity<Type>(arg: T): T {
//     return arg;
// }
//
// let myIdentity: <T>(arg: T) => T = identity;

// просто примеры удобно смотреть
// function f<T>(arg: T): T {return arg}

type fType = number;

function f<T>(arg: T): T {
    return arg;
}
const ff = <T>(arg: T) => arg;
const fff: <T>(arg: T) => T = arg => arg;

f<fType>(1);
ff<fType>(1);
fff<fType>(1);

// interface FModel {
//     <T>(arg: T): T
// }
//
// const FF: <T>(arg: T) => T = f;

// Пример интерфейса с инит значением и примером на constrain с добавлением .length
// interface Lengthwise {
//     length: number;
// }
//
// interface GenericIdentityFn<T extends Lengthwise = number[]> {
//     (arg: T): T;
// }
//
// function identity<T>(arg: T): T {
//     return arg;
// }
//
// let myIdentityString: GenericIdentityFn<string> = identity;
// let myIdentityNumber: GenericIdentityFn = identity;

// Пример класса
// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }
//
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//     return x + y;
// };

// пример с объектами
export const obj = {
    name: 'Max',
    age: 30,
};

// eslint-disable-next-line
// тут typeof потому что obj это value а не type
let b: keyof typeof obj = 'name'; // let b: "name" | "age

// как пример превращения этой функции в функцию с generics
// function getProperty(obj: object, key: string) {
//     return obj[key];
// }
//
// getProperty(obj, 'name');

// K extends keyof T - K является сабтипом ключей объекта T
function getProperty<T, K extends keyof T>(obj: T, key?: K) {
    return obj[key];
}

// если тут сделаю ошибку, например names вместо name, то ts подсветит теперь.
// Также ts подсветит, что prop это string
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const prop = getProperty(obj, 'name');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const funcWithGeneric = <T>(obj: T): T => {
    return obj;
};

console.log(funcWithGeneric(1));

// eslint-disable-next-line
const foo = <T>(x: T) => x;
// export type EnhancedAction<T, R> = (id: string) => (payload: T) => AppThunk<Promise<R>>;
// export type ArrayType<T> = T extends Array<infer V> ? V : never;
// export type Maybe<T> = T | null;

// пример с дженериками в типах и интерфейсах
type AuthSignUpGeneratorContainerProps<T> = {
    prop: T;
};

type TypeGen1<T extends string | number> = T;
// eslint-disable-next-line
let typeGen1: TypeGen1<number> = 1;

// eslint-disable-next-line
const typeGeneric: AuthSignUpGeneratorContainerProps<string> = { prop: '1' };

interface AuthSignUpGeneratorContainerModel<T> {
    prop: T;
}
// eslint-disable-next-line
const interfaceGeneric: AuthSignUpGeneratorContainerModel<string> = { prop: '1' };

// тут в отличие от T = нельзя уже переопределить а можно ограничиться только текущими значениями дженерика
interface TestGen<T extends string | number> {
    prop: T;
}

// eslint-disable-next-line
let testGen: TestGen<number> = { prop: 1 };

// eslint-disable-next-line
// let testGen1: TestGen<boolean> = { prop: true }; // error

// разница между T = в том что тут дефолтное и может быть переопределено
interface TestGenEqual<T = string | number> {
    prop: T;
}

// eslint-disable-next-line
let testGenEqual: TestGenEqual<number> = { prop: 1 };

// eslint-disable-next-line
let testGenEqual1: TestGenEqual<boolean> = { prop: true };

// eslint-disable-next-line
let testGenEqual2: TestGenEqual<string> = { prop: 'str' };
