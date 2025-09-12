/// <reference types="node" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly API: string;
    }
}

declare const __VARIABLE_FROM_DOCKER_ARG__: string;

declare const __VARIABLE_FROM_DOCKER_ENV__: string;

declare module '*.module.sass';

declare module '*.svg' {
    const _default: string;
    export default _default;
}

declare module '*.png' {
    const _default: string;
    export default _default;
}

declare module '*.webp' {
    const _default: string;
    export default _default;
}
