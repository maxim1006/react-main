type MyType = {
    prop: number;
};

type MyType2 = {
    prop2?: number;
};

interface MyModel extends MyType, MyType2 {
    prop1: string;
}

// eslint-disable-next-line
let a: MyModel = {
    prop: 1,
    prop1: '1'
};

// reverse
interface MyModel1 {
    prop1: string;
}

type MyType1 = MyModel1 & {
    prop: number;
};

// eslint-disable-next-line
let a1: MyType1 = {
    prop: 1,
    prop1: '1'
};

export {};
