import { getRandomInteger } from '../common.utils';
import { WordModel } from '../../models/english.model';
import { getUserEnglishDictionary } from '../user.utils';

export function getRandomEnglishWord({ userName }: { userName?: string } = {}): WordModel {
    const dictionary = getUserEnglishDictionary(userName);
    const keys = Object.keys(dictionary);
    const key = keys[getRandomInteger(0, keys.length - 1)];
    // as [], because need to handle string and string[] by concat
    const value = [].concat(dictionary[key] as []);

    return {
        key,
        value,
    };
}
