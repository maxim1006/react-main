import type { HostComponentTypes } from './component-types';

export type KnownEnvs = {
    HOSTNAME: 'HOSTNAME';
    API_URL: 'API_URL';
    SERVER_API_URL: 'SERVER_API_URL';
};

export type KnownEnvNames = KnownEnvs[keyof KnownEnvs];

export interface IHostEnvSubstFn {
    (strings: TemplateStringsArray, ...envs: KnownEnvNames[]): string;
}

export declare const KNOWN_ENVS: KnownEnvs;

export namespace HostContext {
    export interface IBaseContext {
        hostAppName: string;
        onError: (err: MfError) => void;
        themeType: 'light' | 'dark';
    }
}

export declare function useHost<C extends HostContext.IBaseContext = HostContext.IBaseContext>(): C;

export declare function isomorphicCache(): Map<string, unknown>;

export class MfError extends Error {
    constructor(status: number, message: string);

    status: number;
}

export type HostModuleExports = {
    KNOWN_ENVS: typeof KNOWN_ENVS;
    useHost: typeof useHost;
    HostComponents: HostComponentTypes.IHostComponents;
    isomorphicCache: typeof isomorphicCache;
    MfError: typeof MfError;
};

export * from './component-types';
