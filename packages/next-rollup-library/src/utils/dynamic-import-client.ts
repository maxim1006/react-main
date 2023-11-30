export const loadJS = (url: string): Promise<void> => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.onload = () => resolve();
    script.onerror = (e) => reject(e);
    document.head.appendChild(script);
});


export const loadStyle = (url: string): Promise<void> => new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.media = 'all';
    link.onload = () => resolve()
    link.onerror = (e) => reject(e);
    link.href = url;
    document.head.appendChild(link);
});


import React from 'react';
import ReactDOM from 'react-dom/client';
import Link from 'next/link';

export const dynamicUrlImportClient = async (scriptUrl: string, styleUrl?: string) => {
    const w = window as any;
    w['React'] = React;
    w['ReactDOM'] = ReactDOM;
    w['Link'] = Link;

    if (styleUrl) await loadStyle(styleUrl);
    await loadJS(scriptUrl);

    return w;
}
