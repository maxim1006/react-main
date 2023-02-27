// https://core.telegram.org/bots/webapps#implementing-web-apps
declare global {
    interface Window {
        prop: string;
        Telegram: any;
    }
}

export {};
