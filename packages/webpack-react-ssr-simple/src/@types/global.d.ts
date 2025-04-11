declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

declare global {
    interface Window {}

    var redirectTo: string | undefined;
}

export {};
