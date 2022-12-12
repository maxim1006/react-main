import { ComponentType } from 'react';

export enum FullRouterRoute1PathEnum {
    Path = '/:path', // http://localhost:3000/full-router/path
    Path1 = '/:path/:path1',
    Path2 = '/:path/:path1/path2',
}

export enum FullRouterRoute2PathEnum {
    Path = '/:path',
    Path1 = '/:path/:path1',
    Path2 = '/:path/:path1/path2',
}

export type FullRouterRoutingPath = FullRouterRoute1PathEnum | FullRouterRoute2PathEnum;

export interface FullRouterRoutingModel {
    path: FullRouterRoutingPath;
    title: JSX.Element;
    component: ComponentType;
}
