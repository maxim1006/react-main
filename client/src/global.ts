declare global {
    interface Window {
        initialStore: Record<string, string>;
        localStorage: Storage;
        customProp: string;
        $: any;
    }
}

export {};
