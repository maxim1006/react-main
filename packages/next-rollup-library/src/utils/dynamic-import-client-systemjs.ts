import React from 'react';
import ReactDOM from 'react-dom/client';
import { loadJS } from '@/src/utils/dynamic-import-client';

// https://git.netcracker.com/PROD.Platform.Extended_Platform/mui-platform/-/blob/release/8.3.0-ext/mui-platform-factory/src/app/fragments.register.ts
export const dynamicImportSystemJs = async (scriptUrl: string) => {
    await loadJS('https://cdnjs.cloudflare.com/ajax/libs/systemjs/6.14.2/system.js');
    await loadJS('https://cdnjs.cloudflare.com/ajax/libs/systemjs/6.14.2/extras/named-register.js');
    await loadJS('https://cdnjs.cloudflare.com/ajax/libs/systemjs/6.14.2/extras/amd.js');

    const w = window as any;
    // window["define"](externalDepend.alias, [], () => externalDepend.module);
    w['define']('React', [], () => React);
    w['define']('ReactDOM', [], () => ReactDOM);

    const res = await w.System.import(scriptUrl);
    return res.default;
};
