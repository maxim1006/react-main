import { MathGameModel } from './math-game.model';
import { MessageEnum } from './message.model';

export interface EmptyChatDbModel {
    type: null;
    value: null;
}

export interface MathChatDbModel {
    type: MessageEnum.MathGame;
    value: MathGameModel;
}

export interface GuessNumberChatDbModel {
    type: MessageEnum.GuessNumber;
    value: number;
}

export type ChatDbModel = MathChatDbModel | GuessNumberChatDbModel | EmptyChatDbModel;
