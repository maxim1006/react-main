import path from 'path';
import { getRandomInteger } from './common.utils';

const limits: Record<string, number> = {
    cats: 10,
    photos: 47,
};

export const getRandomImage = (imageFolder = 'cats') => {
    // console.log(
    //     path.resolve(
    //         __dirname,
    //         `../assets/images/${imageFolder}/${getRandomInteger(1, limits[imageFolder])}.jpg`
    //     )
    // );

    return path.resolve(
        __dirname,
        `../assets/images/${imageFolder}/${getRandomInteger(1, limits[imageFolder])}.jpg`
    );
};
