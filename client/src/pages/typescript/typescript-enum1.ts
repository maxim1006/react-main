/* eslint-disable */
export enum ViewEnum {
    Toggle = 'toggle',
    Radio = 'radio',
}

type ViewEnumT1 = {
    [key in ViewEnum]?: string;
};

const viewEnumTTest1: ViewEnumT1 = {
    [ViewEnum.Radio]: 'aasd',
};

type ViewEnumT = {
    [key in keyof typeof ViewEnum]?: (typeof ViewEnum)[key];
};

const viewEnumTTest: ViewEnumT = {
    Radio: ViewEnum.Radio,
};

export interface ViewModel<T extends ViewEnum> {
    type: T;
}

export interface ViewToggleModel extends ViewModel<ViewEnum.Toggle> {
    toggleProp: string;
}

export interface ViewRadioModel extends ViewModel<ViewEnum.Radio> {
    radioProp: string;
}

export type ViewType = ViewToggleModel | ViewRadioModel;

// чтобы учитывались все айтемы из ViewType
function exhaustiveCheck(param: never) {
    console.log('Handle switch please ' + param);
}

// Тут показываю пример как сделать несколько моделей объеидняющий type и в зависимости от этого наплоидить интерфейсов,
// аля как в редюсерах
// eslint-disable-next-line
function foo(model: ViewType) {
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
            exhaustiveCheck(model);
    }

    console.warn(prop);
}

// вот пример использования тут обращаю внимание что ViewType могу использовать как угодно, чуть дальше более интересный пример
const viewToggleModel: ViewToggleModel = { toggleProp: ViewEnum.Toggle, type: ViewEnum.Toggle };
const viewRadioModel: ViewRadioModel = { radioProp: ViewEnum.Radio, type: ViewEnum.Radio };

let f = foo(viewToggleModel);
let f1 = foo(viewRadioModel);

function foo1<T extends ViewType>(model: T) {
    return model;
}

let f11 = foo1(viewToggleModel);
let f111 = foo1(viewRadioModel);

// как сделать из объекта enum
// const Role = {
//     ADMIN: 'admin',
//     USER: 'user',
// } as const; // не забываю чтобы получить конкретные значения
//
// как забрать тип объекта который сделал из enum
// enum RoleEnum {
//     ADMIN = 'admin',
//     USER = 'user',
// }
//
// type RoleModel = typeof Role[keyof typeof Role];
// type ValueOf<T> = T[keyof T];
// type RoleModel1 = ValueOf<typeof Role> // замена type RoleModel = typeof Role[keyof typeof Role];
//
// function ff(arg: RoleModel) {}
// function ff1(arg: RoleEnum) {}
//
// ff(Role.ADMIN);
// ff('admin');
//
// ff1(RoleEnum.ADMIN);
// // ff1('admin');  // ошбика
