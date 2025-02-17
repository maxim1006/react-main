export let typescriptAsConstX = 10 as const;

// Type 'readonly [10, 20]'
// eslint-disable-next-line
let y = [10, 20] as const;

// Type '{ readonly text: "hello" }'
// eslint-disable-next-line
let z = { text: 'hello' } as const;

type Values<T> = T[keyof T];

const o = { prop: 'Prop1' } as const;

export type oNames = keyof typeof o;
// если без as const; то value string, с ним 'Prop1'
export type oValues = Values<typeof o>;
