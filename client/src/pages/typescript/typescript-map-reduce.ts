const obj = {};

export default obj;

type Test = {
    name: string;
};

type Test1 = {
    name: string;
    prop: number;
    propOptional?: number;
};

const arr: Test[] = [{ name: 'Max' }, { name: 'Stas' }];

arr.map(i => ({ ...i, prop: 1 }));
arr.map<Test1>(i => ({ ...i, prop: 1 }));
arr.map<Test1>(i => ({ ...i, prop: 1, propOptional: 1 }));
// arr.map<Test1>(i => ({ ...i, propOptional: 1 })); // ошибка так как нет prop

// пример работы structural typing, те когда лишние проперти не влияют на результат prop123 нет, но при этом нет ругани так как ...acc
arr.reduce<Test1>((acc, { name }) => ({ name, prop: 1, prop123: 'asd' }), {} as Test1);
// так не будет ругаться и проверять Test1 изза ...acc
arr.reduce<Test1>((acc, { name }) => ({ ...acc, name, prop: 1 }), {} as Test1);

arr.reduce<Test1[]>((acc, { name }) => [...acc, { name, prop: 1 }], []);
// arr.reduce<[Test, ...Test[]]>((acc, { name }) => [...acc, {name, prop: 1 }], []);
