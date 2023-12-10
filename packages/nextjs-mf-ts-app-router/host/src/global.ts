import { DetailedHTMLProps, HTMLAttributes } from 'react';

declare global {
    interface Window {
        craWidget: any;
    }

    namespace JSX {
        interface IntrinsicElements {
            'accordion': DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            'swiper-slide': React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement> & { lazy?: string | boolean },
                HTMLElement
            >;
        }
    }
    namespace React {
        interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
            fetchpriority?: 'high' | 'low' | 'auto';
        }
    }
}

export {};
