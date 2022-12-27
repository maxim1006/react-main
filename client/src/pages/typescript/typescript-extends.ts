/*eslint-disable*/

// пример с extends пропертей
export type AType = 'a' | 'b' | 'c';

export type ResponseType<K extends AType> = Partial<Record<`${K}Changed`, boolean>>;

export interface Validator {
    fn3<T extends AType>(...keys: T[]): ResponseType<T>;
}

function fn<T extends AType>(...keys: T[]): ResponseType<T> {
    return {};
}

function fn2(): Validator {
    return { fn3: fn };
}

const e1 = fn('c', 'a');
const e3 = fn2().fn3('c');
// e3.cChanged;
// e1.cChanged;
// e1.aChanged
