export let typescriptAsConstX = 10 as const;

// Type 'readonly [10, 20]'
// eslint-disable-next-line
let y = [10, 20] as const;

// Type '{ readonly text: "hello" }'
// eslint-disable-next-line
let z = { text: 'hello' } as const;
