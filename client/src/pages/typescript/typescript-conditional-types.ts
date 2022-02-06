/* eslint-disable */
interface IdLabel {
    id: number /* some fields */;
}
interface NameLabel {
    name: string /* other fields */;
}

export type NameOrId<T> = T extends number ? IdLabel : NameLabel;

function createLabel<T>(idOrName: T): NameOrId<T> {
    throw 'unimplemented';
}

let a = createLabel('typescript'); // NameLabel
let b = createLabel(2.8); // IdLabel
let c = createLabel(Math.random() ? 'hello' : 42); // NameLabel | IdLabel

// Conditional Type Constraints могу присвоить в зависимости от условия конечный тип
type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;

interface Email {
    message: string;
}

interface Email1 {
    prop: string;
}

type EmailMessageContents = MessageOf<Email>; // string
type EmailMessageContents1 = MessageOf<Email1>; // never

// пример как получить тип айтема в массиве или просто тип
type Flatten<T> = T extends any[] ? T[number] : T;
// Here, we used the infer keyword to declaratively introduce a new generic type variable named I instead of specifying how to retrieve the element type of T within the true branch. This frees us from having to think about how to dig through and probing apart the structure of the types we’re interested in.
type Flatten1<T> = T extends (infer I)[] ? I : T; // могу исползовать только в conditional type с extends
type Str = Flatten<string[]>;
type Str1 = Flatten1<string[]>;
type Num = Flatten<number>;
type Num1 = Flatten1<number>;

let arr = ['123', 2, 3];
type arrType = typeof arr;

// так получаю тип элемента в массиве
type arrItemType = arrType[number];

// полезные примеры применения infer в conditional type
type GetReturnType<T> = T extends (...args: never[]) => infer R ? R : never;
type RNum = GetReturnType<() => number>;
type RStr = GetReturnType<() => string>;
type RBoo = GetReturnType<() => boolean[]>;

// Distributive Conditional Types
// так создаю типы отдельных массивов
type ToArray<T> = T extends any ? T[] : never;
type StrArrOrNumArr = ToArray<string | number>; // string[] | number[];
let strArr: StrArrOrNumArr = ['1'];
let numArr: StrArrOrNumArr = [1];
// let wrongArr: StrArrOrNumArr = [true];
// а если хочу именно (string | number)[]
type ToArray1<T> = [T] extends [any] ? T[] : never;
type StrArrOrNumArr1 = ToArray1<string | number>; // (string | number)[]
