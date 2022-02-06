/* eslint-disable */
// ✅ declare properties as readonly
export interface Person {
    readonly name: string;
    readonly age: number;
}

// ✅ implicitely declaring a readonly arrays
const x = [1, 2, 3, 4, 5] as const;

// ✅ explicitely declaring a readonly array
const y: ReadonlyArray<{ x: number; y: number }> = [{ x: 1, y: 1 }];
const y1: readonly [{ x: number; y: number }] = [{ x: 1, y: 1 }];

interface Address {
    street: string;
    city: string;
}

// ✅ converting all the type properties to readonly
export type ReadonlyAddress = Readonly<Address>;

export interface Thing {
    readonly data: string;
}

let a: Thing = {
    data: 'Max',
};

// еще примеры
// Before
// const unsafeArray: Array<number> = [1, 2, 3];
// const unsafeArrayOtherWay: number[] = [1, 2, 3];

// After
// const safeArray: ReadonlyArray<number> = [1, 2, 3];
// const safeArrayOtherWay: readonly number[] = [1, 2, 3];

// three levels
// const unsafeArray: number[] = [1, 2, 3]; // bad
// const safeArray: readonly number[] = [1, 2, 3]; // good
// const verySafeTuple: [number, number, number] = [1, 2, 3]; // super
// const verySafeTuple: readonly [number, number, number] = [1, 2, 3]; // awesome (after v3.4)

// Map:
// Before
const unsafeMap: Map<string, number> = new Map<string, number>();

// After
const safeMap: ReadonlyMap<string, number> = new Map<string, number>();

// Set:
// Before
const unsafeSet: Set<number> = new Set<number>();

// After
const safeSet: ReadonlySet<number> = new Set<number>();
