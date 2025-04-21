import React, { ComponentProps, PropsWithChildren } from 'react';

export namespace HostComponentTypes {
    export type ContentTypeValues = 'value1' | 'value2';

    export interface IHostComponent1Props {
        prop: string;
    }

    export interface IHostComponent2Props {
        prop?: string;
        onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    }

    export interface IHostComponents {
        HostComponent1: React.ComponentType<
            PropsWithChildren<HostComponentTypes.IHostComponent1Props>
        >;
        HostComponent2: React.ComponentType<HostComponentTypes.IHostComponent2Props>;
        Meta: React.ComponentType<React.PropsWithChildren>;
    }
}

export declare const HostComponents: HostComponentTypes.IHostComponents;
