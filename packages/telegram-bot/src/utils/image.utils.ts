import path from 'path';
import { getRandomInteger } from './common.utils';

export const getRandomImagePath = () =>
    path.resolve(__dirname, `../assets/images/cats/${getRandomInteger(1, 10)}.jpg`);
