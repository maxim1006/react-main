type MyNonNullable<T> = T extends null | undefined ? never : T;
type MaybeString = string | null | undefined;

const obj1: MyNonNullable<MaybeString> = 'asd';
// const obj2: MyNonNullable<MaybeString> = null; ошибка
// const obj3: MyNonNullable<MaybeString> = undefined; ошибка

type NonFunctionProperties<T> = Pick<
    T,
    {
        [K in keyof T]: T[K] extends Function ? never : K;
    }[keyof T]
>;

interface NonFunctionPropertiesObject {
    name: string;
    foo: () => void;
}

type OnlyNonFunctions = NonFunctionProperties<NonFunctionPropertiesObject>;
// const obj: OnlyNonFunctions = { name: 'a', foo: () => {} }; // так будет ошибка так как never исключит функции
const obj: OnlyNonFunctions = { name: 'a' }; // ок
