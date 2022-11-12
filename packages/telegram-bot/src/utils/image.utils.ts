import path from 'path';
import { getRandomInteger } from './common.utils';

const limits: Record<string, number> = {
    cats: 10,
    photos: 47,
    clock: 14,
};

export const getRandomImagePath = (imageFolder = 'cats', extention: string = 'jpg') => {
    // console.log(
    //     path.resolve(
    //         __dirname,
    //         `../assets/images/${imageFolder}/${getRandomInteger(1, limits[imageFolder])}.jpg`
    //     )
    // );

    return path.resolve(
        __dirname,
        `../assets/images/${imageFolder}/${getRandomInteger(1, limits[imageFolder])}.${extention}`
    );
};

export const getRandomClockImagePath = () => {
    return getRandomImagePath('clock', 'png');
};
