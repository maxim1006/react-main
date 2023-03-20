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
