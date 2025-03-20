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
// const obj: OnlyNonFunctions = { name: 'a', foo: () => {} }; // так будет ошибка так как never исключит функции, по сути never является ограничителем свойств которые не нужны в extends
const obj: OnlyNonFunctions = { name: 'a' }; // ок

// пример с исключением undefined c помощью never
type ExcludeUndefined<T> = T extends undefined ? never : T;

interface ExcludeUndefinedExample {
    id: number;
    name?: string;
    age?: number;
}

type NameType = ExcludeUndefined<ExcludeUndefinedExample['name']>; // string
type AgeType = ExcludeUndefined<ExcludeUndefinedExample['age']>; // number

const example1: NameType = 'John';
const example2: AgeType = 30;

// const example4: NameType = undefined; // ошибка
// const example5: AgeType = undefined; // ошибка
