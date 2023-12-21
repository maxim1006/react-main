import path from 'path';
import { getRandomInteger } from './common.utils';

const limits: Record<string, number> = {
    cats: 10,
    photos: 134,
    clock: 14,
    miku: 2,
};

export const getRandomImagePath = (imageFolder = 'miku', extention: string = 'webp') => {
    console.log(
        path.resolve(
            __dirname,
            `../assets/images/${imageFolder}/${getRandomInteger(1, limits[imageFolder])}.webp`
        )
    );

    return path.resolve(
        __dirname,
        `../assets/images/${imageFolder}/${getRandomInteger(1, limits[imageFolder])}.${extention}`
    );
};

export const getRandomClockImagePath = () => {
    return getRandomImagePath('clock', 'png');
};
