// в тип T положу какой-то массив и у этого массива есть элементы с типом V, верни мне вот этот тип V
export type ArrayType<T> = T extends Array<infer V> ? V : never;
export type Maybe<T> = T | null;

export type InnerArrType = { [key: string]: number }[];

export type InferredTypeFragment = {
    __typename?: 'InferredTypeFragment';
    localizedData?: Maybe<Array<{ __typename?: 'LocalizedData'; innerArr: Maybe<InnerArrType> }>>;
};

export type MyType = ArrayType<NonNullable<InferredTypeFragment['localizedData']>>;
export type MyTypeInner = ArrayType<NonNullable<InferredTypeFragment['localizedData'][0]['innerArr']>>;
