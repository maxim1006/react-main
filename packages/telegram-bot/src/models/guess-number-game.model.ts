import { AbstractGameModel } from './abstract-game.model';

export interface GuessNumberGameModel extends AbstractGameModel {
    task?: number;
}
