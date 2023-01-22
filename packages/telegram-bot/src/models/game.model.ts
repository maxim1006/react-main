import { MathGameModel } from './math-game.model';
import { GuessNumberGameModel } from './guess-number-game.model';
import { ClockGameModel } from './clock-game.model';
import { EnglishGameModel } from './english-game.model';

export type GameType = MathGameModel | GuessNumberGameModel | ClockGameModel | EnglishGameModel;
