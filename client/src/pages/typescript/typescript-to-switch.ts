type TestType = {
    prop1: string;
    prop2: string;
};
// eslint-disable-next-line
const testType: TestType = {
    prop1: '1',
    prop2: '2'
};

export type toNumberSwitch<T> = {
    [Property in keyof T]: number;
};
// eslint-disable-next-line
const testTypeNumber: toNumberSwitch<TestType> = {
    prop1: 1,
    prop2: 2
};
