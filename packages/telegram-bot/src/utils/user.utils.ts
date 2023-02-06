import { ENGLISH_DICTIONARIES } from '../constants/english.constants';

export function getUserEnglishDictionary(userName: string = '') {
    switch (userName.toLowerCase()) {
        case 'maximprosv':
            return ENGLISH_DICTIONARIES.medium;
        case 'fleur_lionceau':
            return ENGLISH_DICTIONARIES.expert;
        default:
            return ENGLISH_DICTIONARIES.easy;
    }
}
