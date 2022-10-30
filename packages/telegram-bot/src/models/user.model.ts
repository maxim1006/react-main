import { GameTypeEnum } from './game.model';

export interface UserModel<T> {
    dates: UserDateModel<T>;
    name: string;
}

export interface UserDateModel<T> {
    [key: string]: {
        data: {
            games: {
                [key in GameTypeEnum]: Record<string, T>;
            };
        };
    };
}
