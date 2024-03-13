declare module '*.module.scss' {
    const resource: { [key: string]: string };
    export = resource;
}

declare module '*.svg' {
    import React from 'react';
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default content;
}
