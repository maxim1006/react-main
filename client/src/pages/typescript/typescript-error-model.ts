/* eslint-disable */
export enum ErrorCodesEnum {
    UnexpectedError = '0001',
    NotFoundError = '0002',
    InputValidation = '0003',

    Custom = '004',
    Custom1 = '005',
}

interface BaseErrorModel {
    message: string;
}

export interface CustomErrorModel extends BaseErrorModel {
    code: ErrorCodesEnum.Custom;
    payload: { prop: string };
}

export interface Custom1ErrorModel extends BaseErrorModel {
    code: ErrorCodesEnum.Custom1;
    payload: { prop1: string };
}

// Contain all overridden BasePortalErrorModel except RestPortalErrorModel, это описание кастомных ошибок
type ExtendedErrorModel = CustomErrorModel | Custom1ErrorModel;

// Contain rest of BasePortalErrorModel это описание стандартных ошибок чтобы не писать для них свой кастомный интерфейс каждый раз
interface RestErrorModel extends BaseErrorModel {
    code: Exclude<ErrorCodesEnum, ExtendedErrorModel['code']>;
}

let a: RestErrorModel = { code: ErrorCodesEnum.InputValidation, message: 'asd' };

export type ErrorModel = ExtendedErrorModel | RestErrorModel;

// usage
function isCustomError(error: ErrorModel) {
    if (error.code === ErrorCodesEnum.Custom) console.log(error.payload.prop);
}

function isCustom1Error(error: ErrorModel) {
    if (error.code === ErrorCodesEnum.Custom1) {
        console.log(error.payload.prop1);
    }
}

function isRestError(error: ErrorModel) {
    if (error.code === ErrorCodesEnum.NotFoundError) console.log(error.message);
}
