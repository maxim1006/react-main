export enum ViewEnum {
    Toggle = 'toggle',
    Radio = 'radio'
}

type ViewEnumT = {
    [key in keyof typeof ViewEnum]: typeof ViewEnum[key];
};

export interface ViewModel<T extends ViewEnum> {
    type: T;
}

export type ViewType = ViewToggleModel | ViewRadioModel;

export interface ViewToggleModel extends ViewModel<ViewEnum.Toggle> {
    toggleProp: string;
}

export interface ViewRadioModel extends ViewModel<ViewEnum.Radio> {
    radioProp: string;
}

// Тут показываю пример как сделать несколько моделей объеидняющий type и в зависимости от этого наплоидить интерфейсов,
// аля как в редюсерах
// eslint-disable-next-line
function trigger(model: ViewType) {
    let prop;

    switch (model.type) {
        case ViewEnum.Radio: {
            prop = model.radioProp;
            break;
        }

        case ViewEnum.Toggle: {
            prop = model.toggleProp;
            break;
        }

        default:
            break;
    }

    console.warn(prop);
}
