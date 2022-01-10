interface ObjModel {
    f: FuncModel;
    f1: FuncModel1;
    f2: FuncModel2;
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

export const obj: ObjModel = {
    f() {
        return [1];
    },
    f1: function() {
        return '1';
    },
    f2: () => 1
};

// пример интерфейса для конструктора
interface CallOrConstruct {
    new (s: string): Date;
    (n: number): number;
}

function fn(ctor: CallOrConstruct, isFunction: boolean): number | Date {
    return isFunction ? ctor(1) : new ctor('hello');
}
