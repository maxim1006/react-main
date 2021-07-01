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
    f2: () => 1,
};
