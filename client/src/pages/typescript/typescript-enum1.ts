export enum ViewEnum {
    TOGGLE,
    RADIO
}

export interface ViewModel<T extends ViewEnum> {
    type: T;
}

export type ViewType = ViewToggleModel | ViewRadioModel;

export interface ViewToggleModel extends ViewModel<ViewEnum.TOGGLE> {
    toggleProp: string;
}

export interface ViewRadioModel extends ViewModel<ViewEnum.RADIO> {
    radioProp: string;
}

// Тут показываю пример как сделать несколько моделей объеидняющий type и в зависимости от этого наплоидить интерфейсов,
// аля как в редюсерах
// eslint-disable-next-line
function trigger(model: ViewType) {
    let prop;

    switch (model.type) {
        case ViewEnum.RADIO: {
            prop = model.radioProp;
            break;
        }

        case ViewEnum.TOGGLE: {
            prop = model.toggleProp;
            break;
        }

        default:
            break;
    }

    console.warn(prop);
}
