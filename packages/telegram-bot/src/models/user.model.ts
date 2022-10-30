import { MessageEnum } from './message.model';

export interface UserModel<T = void> {
    dates?: UserDateModel<T>;
    firstName?: string;
    // текущий месседж в котором находится пользователь
    mode?: MessageEnum;
}

export interface UserDateModel<T = void> {
    [key: string]: {
        data?: {
            games: {
                [key in MessageEnum]?: Record<string, T>;
            };
        };
    };
}
