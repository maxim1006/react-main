// extends ничего не расширяет а лишь указывает что данный дженерик должен принимать объект со
// свойствами от extends

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
    prop1: '1',
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
    prop1: '1',
};

export {};

// пример с extends
interface TestTypeB {
    b?: number;
}

interface TestTypeC extends TestTypeB {
    c?: number;
}

// Сравнение extends vs = в дженерике, extends обязательный а "=" это только начальное значение

// тут TestTypeA должен экстендить TestTypeC иначе ошибка
export interface TestTypeA extends TestTypeC {
    a?: number;
}

class TestTypeClass<T extends TestTypeC> {
    cc: T | undefined;
}

let testTypeClass = new TestTypeClass<TestTypeA>();
testTypeClass.cc = { a: 1, c: 1, b: 1 };

let testTypeClass1 = new TestTypeClass();
testTypeClass1.cc = { c: 1, b: 1 };

// пример с = и тут TestTypeAA НЕ должен экстендить TestTypeC
export interface TestTypeAA {
    a?: number;
}

interface TestTypeBB {
    b?: number;
}

interface TestTypeCC extends TestTypeBB {
    c?: number;
}

// тут уже не могу написать extends так как TestTypeAA не наследует TestTypeCC
class TestTypeClasss<T = TestTypeCC> {
    cc: T | undefined;
}

let testTypeClasss = new TestTypeClasss<TestTypeAA>();
testTypeClasss.cc = { a: 1 };

let testTypeClasss1 = new TestTypeClasss();
testTypeClasss1.cc = { b: 1, c: 1 };

// прикольный пример с Object.assign
interface INonFunction {
    a: string;
    (): void;
}

let _a: INonFunction = Object.assign(function () {}, { a: 'test' });
