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
    age: 30,
};

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
