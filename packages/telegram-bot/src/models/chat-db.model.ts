import { MessageTypesEnum } from '../constants/message.constants';
import { MathGameModel } from './math-game.model';

export interface EmptyChatDbModel {
    type: null;
    value: null;
}

export interface MathChatDbModel {
    type: MessageTypesEnum.Math;
    value: MathGameModel;
}

export interface GuessNumberChatDbModel {
    type: MessageTypesEnum.GuessNumber;
    value: number;
}

export type ChatDbModel = MathChatDbModel | GuessNumberChatDbModel | EmptyChatDbModel;
