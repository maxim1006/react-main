import { AxiosResponse, AxiosRequestConfig } from 'axios';
import React, { ComponentProps, PropsWithChildren, RefObject } from 'react';

export declare enum MfErrorEnum {
    Prop = 'Prop',
}

export type KnownEnvs = {
    HOSTNAME: 'HOSTNAME';
    API_URL: 'API_URL';
};

export type KnownEnvNames = KnownEnvs[keyof KnownEnvs];

export interface IHostEnvSubstFn {
    (strings: TemplateStringsArray, ...envs: KnownEnvNames[]): string;
}

export declare const KNOWN_ENVS: KnownEnvs;

/**
 * Шаблонная строка для переменных окружения
 * @param strings
 * @param envs
 */
export declare function substituteEnvsInString(
    strings: TemplateStringsArray,
    ...envs: ((envs: Record<KnownEnvNames, string>) => string)[]
): string;

export namespace HostUtils {
    export type JsonContent =
        | number
        | string
        | boolean
        | null
        | JsonContent[]
        | { [key: string | number]: JsonContent | null };

    export interface IRequestOptions extends AxiosRequestConfig {
        baseUrl?: string;
        method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
        credentials?: RequestCredentials;
        checkSuccess?: boolean;
        clientErrors?: boolean;
        timeout?: number | undefined;
        mode?: RequestMode;
        sameHost?: string | boolean | null;
        headers?: Record<string, string>;
        body?: Exclude<BodyInit, ReadableStream> | JsonContent | null;
        isJwtRefreshed?: boolean;
    }

    export interface IManager {
        <T>(url: string, options?: IRequestOptions): Promise<AxiosResponse<T>>;
    }

    export type Header = Record<string, string>;
    export type TGetFetchOptions = (requestUrl: string, headersData?: Header) => [string, HostUtils.IRequestOptions];

    export type TGetResult = <R>(promise: Promise<AxiosResponse<R>>) => Promise<R>;

    export interface I {
        networkManager: IManager;
        getFetchOptions: TGetFetchOptions;
        getResult: TGetResult;
    }
}

export declare const network: HostUtils.I;

export namespace HostContext {
    export interface IBaseContext {
        hostAppName: string;
        auth: {
            isAuth: boolean;
            requestAuth: (requestedFrom: string) => Promise<void>;
        };
    }
}

export interface IUxFeedback {
    sendEvent: (name: string) => void;
}

export declare const uxFeedback: IUxFeedback;

export declare function useHost<C extends HostContext.IBaseContext = HostContext.IBaseContext>(): C;

export type HostModuleExports = {
    KNOWN_ENVS: typeof KNOWN_ENVS;
    substituteEnvsInString: typeof substituteEnvsInString;
    network: HostUtils.I;
    useHost: typeof useHost;
    uxFeedback: IUxFeedback;
    components: HostComponentTypes.IHostComponents;
};

// Components
export namespace HostComponentTypes {
    export interface IButtonProps {
        anchorRef: RefObject<HTMLButtonElement & HTMLAnchorElement>;
        onClick: () => void;
    }

    export interface IMyComponentsMoreMenuComponentProps<T> {
        children: (params: {
            isMenuShown: boolean;
            closeMenu: () => void;
            menuListRef: React.MutableRefObject<T | null>;
        }) => React.ReactNode;
        options?: TPopperOptions;
        renderButton?: (buttonProps: IButtonProps) => React.ReactNode;
        isOpenMenu: boolean;
        onOpenMenu: (isOpen: boolean) => void;
        onCloseMenu?: () => void;
        scrollLock?: boolean;
    }

    export interface IMyComponentsMoreMenuProps<T>
        extends Omit<IMyComponentsMoreMenuComponentProps<T>, 'isOpenMenu' | 'onOpenMenu'> {
        isOpenMenu?: boolean;
        onOpenMenu?: (isOpen: boolean) => void;
    }

    export interface IHostComponents {
        MyComponentsMoreMenu: typeof MyComponentsMoreMenu;
    }
}

export declare const MyComponentsMoreMenu: <T extends HTMLElement>(
    props: HostComponentTypes.IMyComponentsMoreMenuProps<T>,
) => React.JSX.Element;
