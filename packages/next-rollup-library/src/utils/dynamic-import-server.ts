import http, { IncomingMessage } from 'http';
import concat from 'concat-stream';
import vm from 'vm';
import * as JSX from 'react/jsx-runtime';

import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';

const context: any = {
    React: React,
    Link: Link,
    fetch: fetch,
    ReactJsxRuntime: JSX,
    Classnames: classnames,
};

export const dynamicUrlImportServer = async (scriptUrl: string) => {
    const localeSrc = scriptUrl + '?v=' + Math.random(); //to avoid caches

    const loadedContext: any = await new Promise((resolve, reject) => {
        http.get(localeSrc, (res: IncomingMessage) => {
            if (res.statusCode != 200) {
                console.log(`Failed to get ${localeSrc}`, res.statusMessage);
                reject(res.statusMessage);
                return;
            }
            res.setEncoding('utf8');
            res.pipe(
                concat({ encoding: 'string' }, (remoteSrc: string) => {
                    const script = new vm.Script(remoteSrc);
                    script.runInNewContext(context);
                    resolve(context);
                })
            );
        });
    });
    console.log('Object.keys(loadedContext)=', Object.keys(loadedContext));
    return loadedContext;
};
