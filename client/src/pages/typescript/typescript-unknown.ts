export const isNotEmpty = (obj: unknown): boolean => obj !== null && obj !== undefined;

let obj: unknown = { a: 1 };

if (obj) obj = 1;
