/* eslint-disable */
// в тип T положу какой-то массив и у этого массива есть элементы с типом V, верни мне вот этот тип V
export type ArrayType<T> = T extends (infer V)[] ? V : never;
export type Maybe<T> = T | null;

export type InnerArrType = { [key: string]: number }[];

// как залезть в объект и получить типы на несколько уровней вложенности, даже если они опциональные
export type InferredTypeFragment = {
    __typename?: 'InferredTypeFragment';
    localizedData?: Maybe<Array<{ __typename?: 'LocalizedData'; innerArr: Maybe<InnerArrType> }>>;
};

export type MyType = ArrayType<NonNullable<InferredTypeFragment['localizedData']>>;
// export type MyTypeInner = ArrayType<NonNullable<InferredTypeFragment['localizedData'][0]['innerArr']>>; // так не отработает
export type MyTypeInner1 = ArrayType<NonNullable<MyType['innerArr']>>; // а так норм

// еще пример
const array: number[] = [1, 2, 3, 4];
type X = typeof array extends (infer U)[] ? U : never;
// тоже но немного по-другому
type X1<T> = T extends any[] ? T[number] : never;
type ArrayType1 = X1<typeof array>; // number
type ArrayType1Str = X1<string[]>; // string
// ну и в довесок тоже но с расширяемым дженериком и infer
type X2<T> = T extends (infer V)[] ? V : T;
type ArrayType2 = X2<typeof array>;
