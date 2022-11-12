import { MathGameModel } from './math-game.model';
import { GuessNumberGameModel } from './guess-number-game.model';
import { ClockGameModel } from './clock-game.model';

export type GameModel = MathGameModel | GuessNumberGameModel | ClockGameModel;
