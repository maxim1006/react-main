// extends ничего не расширяет а лишь указывает что данный дженерик должен принимать объект со свойствами от extends

// пример с extends
interface TestTypeB {
    b?: number;
}

interface TestTypeC extends TestTypeB {
    c?: number;
}

// тут TestTypeA должен экстендить TestTypeC иначе ошибка
export interface TestTypeA extends TestTypeC {
    a?: number;
}

class TestTypeClass<T extends TestTypeC> {
    cc: T;
}

let testTypeClass = new TestTypeClass<TestTypeA>();
testTypeClass.cc = { a: 1, c: 1, b: 1 };

let testTypeClass1 = new TestTypeClass();
testTypeClass1.cc = { c: 1, b: 1 };
/*
 *
 *
 *
 * */
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
    cc: T;
}

let testTypeClasss = new TestTypeClasss<TestTypeAA>();
testTypeClasss.cc = { a: 1 };

let testTypeClasss1 = new TestTypeClasss();
testTypeClasss1.cc = { b: 1, c: 1 };
