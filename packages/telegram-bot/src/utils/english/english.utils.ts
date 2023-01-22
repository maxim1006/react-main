import { getRandomInteger } from '../common.utils';
import { ENGLISH_WORDS_DICTIONARY } from '../../constants/english.constants';
import { WordModel } from '../../models/english.model';

export function getRandomEnglishWord(): WordModel {
    const keys = Object.keys(ENGLISH_WORDS_DICTIONARY);
    const key = keys[getRandomInteger(0, keys.length - 1)];
    // as [], because need to handle string and string[] by concat
    const value = [].concat(ENGLISH_WORDS_DICTIONARY[key] as []);

    return {
        key,
        value,
    };
}
