import React from 'react';

// @ts-ignore
import { ButtonBase } from '@material-ui/core';

// примеры typeof
// const MyArray = [
//     { name: "Alice", age: 15 },
//     { name: "Bob", age: 23 },
//     { name: "Eve", age: 38 },
// ];
//
// // так могу получить тип элемента в массиве
// type Person = typeof MyArray[number];
//
// type Person1 = {
//     name: string;
//     age: number;
// }
// type Age = typeof MyArray[number]["age"];
// type Age2 = Person1["age"];

// typeof с объектами
export const o = {
    foo: 1,
    bar: 2
};

export const o1: typeof o = {
    foo: 3,
    bar: 1
};

export const o2: Partial<typeof o> = {
    bar: 1
};

// Grabbing the Prop types of a component: Use React.ComponentProps and typeof,
// and optionally Omit any overlapping types
type ButtonProps = React.ComponentProps<typeof ButtonBase>; // no problem! grab your own!
type AlertButtonProps = Omit<ButtonProps, 'onClick'>; // modify
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AlertButton: React.FC<AlertButtonProps> = props => <ButtonBase onClick={() => alert('hello')} {...props} />;

// You may also use ComponentPropsWithoutRef (instead of ComponentProps)
// and ComponentPropsWithRef (if your component specifically forwards refs)

// Grabbing the return type of a function: use ReturnType:
// Copy;
// inside some library - return type { baz: number } is inferred but not exported
function foo(bar: string) {
    return { baz: 1 };
}

//  inside your app, if you need { baz: number }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type FooReturn = ReturnType<typeof foo>; // { baz: number }

console.log(window.customProp);

// Как убрать пару свойств из типа и добавить новые
interface BaseOmitModel {
    name: string;
    id: string;
    items: { text: string }[];
}

export interface NewOmitModel extends Omit<BaseOmitModel, 'id' | 'items'> {
    id: number;
    items: { value: unknown }[];
}

// конвертировать одно свойство из опционального в обязательное
interface Book {
    author?: string;
    numPages: number;
    price: number;
    id: string;
}

// ✅ Article is a Book without a Page
type Article = Omit<Book, 'numPages'>;

// ✅ We might need a readonly verison of the Book Type
type ReadonlyBook = Readonly<Book>;

// ✅ A Book that must have an author
type NonAnonymousBook = Omit<Book, 'author'> & Required<Pick<Book, 'author'>>;
type NonAnonymousBook1 = Omit<Book, 'id'> & Required<Pick<Book, 'id'>>;
type NonAnonymousBook2 = Omit<Book, 'id'> & Partial<Pick<Book, 'id'>>;
