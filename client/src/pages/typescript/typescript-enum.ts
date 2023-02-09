/* eslint-disable */
export enum PropEnum {
    Prop1 = 'Prop1',
    Prop2 = 'Prop2',
}
//
// let a: Props;
//
// a = PropEnum.Prop1;
// a = PropEnum.Prop2;
//
// // ошибка
// a = 123;

const CARD_PAYMENT_METHOD_NAME = 'card';

export enum PaymentMethodEnum {
    Card = 'card',
    None = 'None',
}

// eslint-disable-next-line
const paymentMethodNameByPaymentType: { [key in PaymentMethodEnum]: string } = {
    [PaymentMethodEnum.Card]: CARD_PAYMENT_METHOD_NAME,
    [PaymentMethodEnum.None]: '',
};

// пример с энумом в качестве ключей объекта
enum StepStateEnum {
    Passed = 'passed',
    Edit = 'edit',
    Pristine = 'pristine',
}

interface StepModel {
    currentState?: StepStateEnum;
    name?: StepNameEnum;
    stepNumber?: number;
}

enum StepNameEnum {
    Delivery = 'delivery',
    Delivery1 = 'delivery1',
}

let stepNameEnum: StepNameEnum = StepNameEnum.Delivery;

// а вот так уже могу забрать propName у enum
export type StepsType = {
    [key in keyof typeof StepNameEnum]?: string;
};
let stepsType: StepsType = { Delivery: '' };

// тут уже ключ enum забираю
export type StepsType3 = {
    [key in StepNameEnum]?: string;
};
let stepsType3: StepsType3 = { [StepNameEnum.Delivery1]: '' };

// тут обязательно надо все ключи enum перечислить
export type StepsType1 = Record<StepNameEnum, string>;
let stepsType1: StepsType1 = { [StepNameEnum.Delivery1]: 'str', [StepNameEnum.Delivery]: 'str' };

// тут уже не надо все ключи enum перечислить
export type StepsType2 = {
    [key in StepNameEnum]?: string;
};
let stepsType2: StepsType2 = { [StepNameEnum.Delivery1]: 'str' };

// а вот так уже могу забрать propName у enum
export type StepsTypeReadonly = {
    [key in keyof typeof StepNameEnum]: typeof StepNameEnum[key];
};
let stepsTypeReadonly: StepsTypeReadonly = { Delivery: StepNameEnum.Delivery, Delivery1: StepNameEnum.Delivery1 };

export type StepsTypePartial = Partial<StepsTypeReadonly>;
///////////////////////////

// как вытащить пропсы и засетить энам
enum FooKeys {
    FOO = 'foo',
    BAR = 'bar',
}

// probably all you need, but it's a type alias
type FooType = Record<FooKeys, string>;

// if you need an interface instead you can do this
interface FooInterface extends FooType {}

declare const foo: FooInterface;
foo.foo; // okay
foo[FooKeys.FOO]; // okay

foo.bar; // okay
foo[FooKeys.BAR]; // okay

// foo.baz; // error

// --------- как использовать не все свойства enum а только некоторые ---------------
enum ExcludeEnum {
    P = 'p',
    P1 = 'p1',
}

type ExcludeEnumType = Exclude<ExcludeEnum, ExcludeEnum.P>;

const o: Record<ExcludeEnumType, string> = { [ExcludeEnum.P1]: '1' };
// const o: Record<ExcludeEnumType, string> = {[ExcludeEnum.P]: "1"} // ошибка
// --------- ------------------------------------------------------------- ---------------
