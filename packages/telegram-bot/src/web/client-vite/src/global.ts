import { TelegramWebApps } from 'telegram-webapps-types';

// https://core.telegram.org/bots/webapps#implementing-web-apps
declare global {
    interface Window {
        prop: string;
        Telegram: TelegramWebApps.SDK;
    }
}

export {};
