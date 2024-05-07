/* eslint-disable */
export enum CardTypeEnum {
    Card = 'Card',
    Placeholder = 'Placeholder',
    Third = 'Third',
}

interface BaseCardModel {
    id: string;
    type: CardTypeEnum;
}

export interface ComparisonCardModel extends BaseCardModel {
    type: CardTypeEnum.Card;
    model: string;
}

export interface ComparisonPlaceholderModel extends BaseCardModel {
    type: CardTypeEnum.Placeholder;
    prop: number;
}

export interface ThirdModel extends BaseCardModel {
    type: CardTypeEnum.Third;
    third: number;
}

export type ComparisonModel = ComparisonCardModel | ComparisonPlaceholderModel | ThirdModel;

function exhaustiveCheck(param: never) {
    console.log('Handle switch please ' + param);
}

// если не сделать гвард то в ифе в f будут общие а не конкретные проперти для arg.third;
function isThird(arg: ComparisonModel): arg is ThirdModel {
    return arg.type === CardTypeEnum.Third;
}

// eslint-disable-next-line
function f(arg: ComparisonModel) {
    if (isThird(arg)) arg.third;

    switch (arg.type) {
        case CardTypeEnum.Card:
            return arg.model;
        case CardTypeEnum.Placeholder:
            return arg.prop;
        // история с exhaustiveCheck(arg); в том что если хоть 1 из ComparisonModel не обработали то будет ошибка в default (закомментируй default для проверки)
        case CardTypeEnum.Third:
            return arg.third;
        default:
            exhaustiveCheck(arg);
    }
}

// примеры с несколькими закастованными объектами
interface BaseObject {
    type: string;
    name: string;
}

interface FirstObject extends BaseObject {
    type: 'first';
    first: string;
}

interface SecondObject extends BaseObject {
    type: 'second';
    second: string;
}

type AllObject = FirstObject | SecondObject;

// approach1
export type FindByType<Union, Type> = Union extends { type: Type } ? Union : undefined;

export function castObject<T extends AllObject['type']>(
    expectedType: T,
    obj: AllObject,
): FindByType<AllObject, T> | undefined {
    if (obj.type !== expectedType) {
        console.warn(`expected type ${expectedType} but was ${obj.type}`);
        return;
    }
    return obj as FindByType<AllObject, T>;
}

function hello(obj: AllObject) {
    const firstObject = castObject('first', obj);
    return firstObject?.first;
}

// approach2
export enum ObjectTypeEnum {
    First = 'first',
    Second = 'second',
}

function castObject1<T extends AllObject>(type: ObjectTypeEnum, arg: AllObject): arg is T {
    return arg.type === type;
}

function getCastedObject<T extends AllObject>(type: ObjectTypeEnum, arg: AllObject): T | null {
    if (castObject1<T>(type, arg)) {
        return arg as T;
    }

    return null;
}

function hello1(obj: AllObject) {
    if (castObject1<FirstObject>(ObjectTypeEnum.First, obj)) {
        console.log(obj.first);
    }

    if (castObject1<SecondObject>(ObjectTypeEnum.Second, obj)) {
        console.log(obj.second);
    }

    const firstObj = getCastedObject<FirstObject>(ObjectTypeEnum.Second, obj);
    console.log(firstObj?.first);

    const secondObj = getCastedObject<FirstObject>(ObjectTypeEnum.Second, obj);
    console.log(firstObj?.first);
}
