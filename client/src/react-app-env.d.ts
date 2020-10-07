/// <reference types="react-scripts" />
declare module '*.json' {
    const value: any;
    export default value;
}

// declare module '*.less';

declare module '*.less' {
    const resource: { [key: string]: string };
    export = resource;
}

// declaration.d.ts
// anywhere in your project, NOT the same name as any of your .ts/tsx files
// declare module "*.png";

declare global {
    interface Window {
        initialStore: Record<string, string>;
        customProp?: string;
    }
}
