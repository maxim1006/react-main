import { MyType } from '@app/pages/typescript/typescript-infer';

type OnlyBooleanAndMy = {
    [key: string]: boolean | MyType;
};

const OnlyBooleanAndMyExample: OnlyBooleanAndMy = {
    prop: true,
    arr: { innerArr: [{ prop: 1 }] }
};

// если нужно только с определенными пропертями из объекта
type ToBooleanSwitch<T> = {
    [key in keyof T]: boolean;
};

let obj = { age: 34, name: 'Max' };
let obj1: ToBooleanSwitch<typeof obj> = {
    age: true,
    name: true
};

// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
    -readonly [T in keyof Type]: Type[T];
};

type LockedAccount = {
    readonly id: string;
    readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
    [T in keyof Type]-?: Type[T];
};

type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
};

type User = Concrete<MaybeUser>;
type User1 = Required<MaybeUser>;

// могу менять имена пропертей в проверке на наличие пропертей
type Getters<T> = {[P in keyof T as `my${Capitalize<string & P>}`]: T[P]}
type LazyUser = Getters<User>; // {myId: string, myName: string, myAge: number}

// могу отфильтровать проперти
type RemoveName<T> = {[P in keyof T as Exclude<P, 'name'>]: T[P]}
type UserWithoutName = RemoveName<User>; // {age: number, location: string}

// могу итерироваться как угодно по значениям объекта, тут P === T
type Config<T extends {id: string}> = {[P in T as T['id']]: (e: P) => void};
type Configed = Config<MaybeUser>;
let obj2: Configed = { id: (e: MaybeUser) => {}}

// могу сделать conditional type which returns either a true or false depending on whether an object has the property
type ConditionalUserName<T> = { [P in keyof T]: T[P] extends {name: string} ? true : false}
type ConditionalUserNameT = ConditionalUserName<{anonymousUser: {name: unknown}, user: {name: string}}>;

export default {};
