import { DetailedHTMLProps, HTMLAttributes } from 'react';

declare global {
    interface Window {
        initialStore: Record<string, string>;
        localStorage: Storage;
        customProp: string;
        $: any;
    }
    namespace JSX {
        interface IntrinsicElements {
            'custom-selector': DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        }
    }
    namespace React {
        interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
            fetchpriority?: 'high' | 'low' | 'auto';
        }
    }
}

export {};
