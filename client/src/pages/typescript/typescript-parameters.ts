function typescriptParameters(a: { prop: string }) {
    console.log(a);
}

export default { prop: '123' } as Parameters<typeof typescriptParameters>[0];
