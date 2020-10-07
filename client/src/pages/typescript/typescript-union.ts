interface A {
    a: string;
}

interface B extends A {
    b: string;
}

export const typescriptUnion: B = {
    a: '1',
    b: '1',
};
