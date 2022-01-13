export enum Props {
    Prop1 = 'Prop1',
    Prop2 = 'Prop2'
}
//
// let a: Props;
//
// a = Props.Prop1;
// a = Props.Prop2;
//
// // ошибка
// a = 123;

const CARD_PAYMENT_METHOD_NAME = 'card';

export enum PaymentMethodEnum {
    Card = 'card',
    None = 'None'
}

// eslint-disable-next-line
const paymentMethodNameByPaymentType: { [key in PaymentMethodEnum]: string } = {
    [PaymentMethodEnum.Card]: CARD_PAYMENT_METHOD_NAME,
    [PaymentMethodEnum.None]: ''
};

// пример с энумом в качестве ключей объекта
enum StepStateEnum {
    Passed = 'passed',
    Edit = 'edit',
    Pristine = 'pristine'
}

interface StepModel {
    currentState: StepStateEnum;
    name: StepNameEnum;
    stepNumber: number;
}

enum StepNameEnum {
    Delivery = 'delivery',
    Delivery1 = 'delivery1'
}

export type StepsType = {
    [key in keyof typeof StepNameEnum]?: StepModel;
};

export type StepsTypeReadonly = {
    [key in keyof typeof StepNameEnum]: typeof StepNameEnum[key];
};

export type StepsTypePartial = Partial<StepsTypeReadonly>;
///////////////////////////
