declare global {
    interface Window {
        customFoo: () => void;
    }
}

declare module '*.scss' {
    const resource: { [key: string]: string };
    export = resource;
}

export {};
