// declare global: меняет глобальные типы для всего проекта.
declare global {
    interface Window {
        customFoo: () => void;
    }
}

// declare module 'x': меняет только типы конкретного модуля и видны в местах, где этот модуль импортируют.
declare module '*.scss' {
    const resource: { [key: string]: string };
    export = resource;
}

// declare global требует, чтобы файл был модулем, поэтому нужен экспорт
export {};
