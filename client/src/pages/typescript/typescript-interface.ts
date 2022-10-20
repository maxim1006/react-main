/* eslint-disable */
interface ObjModel {
    p: string;
    f: FuncModel;
    f1: FuncModel1;
    f2: FuncModel2;
}

interface TestFuncModel {
    // виды функций в типах / интерфейсах
    (arg: string): number[];
    func: (arg: string) => number[];
}

interface FuncModel {
    (): number[];
}

interface FuncModel1 {
    (): string;
}

interface FuncModel2 {
    (): number;
}

// 3 варианта записи в объекте
export const obj: ObjModel = {
    p: '1',

    f() {
        return [1];
    },

    f1: function () {
        return '1';
    },

    f2: () => 1,
};

// пример интерфейса для конструктора
interface CallOrConstruct {
    new (s: string): Date;
    (n: number): number;
}

function fn(ctor: CallOrConstruct, isFunction: boolean): number | Date {
    return isFunction ? ctor(1) : new ctor('hello');
}
