import { MessageEnum } from './message.model';
import { GameType } from './game.model';

export interface UserModel {
    dates?: UserDateModel;
    firstName?: string;
    // текущий месседж в котором находится пользователь
    mode?: MessageEnum;
}

export interface UserDateModel {
    [key: string]: {
        data?: {
            games: {
                [key in MessageEnum]?: Record<string, GameType>;
            };
        };
    };
}
