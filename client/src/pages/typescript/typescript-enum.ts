export enum Props {
    Prop1 = 'Prop1',
    Prop2 = 'Prop2',
}
//
// let a: Props;
//
// a = Props.Prop1;
// a = Props.Prop2;
//
// // ошибка
// a = 123;

const CARD_PAYMENT_METHOD_NAME = "card";

export enum PaymentMethodEnum {
    Card = 'card',
    None = 'None',
}

const paymentMethodNameByPaymentType: { [key in PaymentMethodEnum]: string } = {
    [PaymentMethodEnum.Card]: CARD_PAYMENT_METHOD_NAME,
    [PaymentMethodEnum.None]: '',
};
