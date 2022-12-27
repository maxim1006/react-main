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

export type ComparisonModel = ComparisonCardModel | ComparisonPlaceholderModel;

export enum CardTypeEnum {
    Card = 'Card',
    Placeholder = 'Placeholder',
}

// eslint-disable-next-line
function f(arg: ComparisonModel) {
    if (arg.type === CardTypeEnum.Card) return arg.model;
    if (arg.type === CardTypeEnum.Placeholder) return arg.prop;
}
