import { getRandomInteger } from '../utils/common.utils';
import {
    EnglishGameEnum,
    EnglishGameModel,
    EnglishGameTranslateWordTaskModel,
} from '../models/english-game.model';
import { getRandomEnglishWord } from '../utils/english/english.utils';

export class EnglishGameModule {
    getRandomTask({ userName }: { userName: string }): EnglishGameModel {
        const arr = [EnglishGameEnum.TranslateToRussian];
        const name = arr[getRandomInteger(0, arr.length - 1)] as EnglishGameEnum;

        const task = this[name]({ userName });

        return {
            name,
            task,
            timestamp: Date.now(),
        };
    }

    [EnglishGameEnum.TranslateToRussian]({
        userName,
    }: {
        userName: string;
    }): EnglishGameTranslateWordTaskModel {
        return {
            value: getRandomEnglishWord({ userName }),
        };
    }
}
