// Replace any type example
// export interface GModel<T> {
//     [prop: string]: T;
// }
//
// const gModel: GModel<string> = {
//     a: "1"
// };

export const obj = {
    name: 'Max',
    age: 30
};

// eslint-disable-next-line
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

interface TestGen<T extends string | number> {
    prop: T;
}

// eslint-disable-next-line
let testGen: TestGen<number> = { prop: 1 };
