// ad-hoc (мнимый) один метод работает как бы с 2мя типами данных, за счет перегрузки методов
class Calculator {
    add(a: number): number;
    add(a: number, b?: string): number | string {
        if (typeof a === 'number') {
            return a;
        }

        return a + b;
    }
}

class Car {
    public static drive(speed: number): string;
    public static drive(speed: number, target: number): number[];
    public static drive(speed: number, target?: number): string | number[] {
        if (target) {
            const arr: number[] = [];

            for (let i = speed; i <= target; i++) {
                arr.push(i);
            }

            return arr;
        }

        return `Car is driving with ${speed} km/h.`;
    }
}

// примеры с функциями и оверлоадом
interface ProgressiveImageModel {
    src?: string;
    key?: string;
    alt?: string;
    title?: string;
}

const pictures: ProgressiveImageModel[] = [
    {
        src: 'src',
        key: 'key',
        alt: 'alt',
        title: 'title',
    },
];

function useCmsPicture(key: string): ProgressiveImageModel | undefined;
function useCmsPicture(key: string, ...keys: string[]): ProgressiveImageModel[];
function useCmsPicture(key: string, ...keys: string[]): ProgressiveImageModel | ProgressiveImageModel[] | undefined {
    if (!pictures?.length) return undefined;

    if (keys?.length) {
        return [key, ...keys].reduce<ProgressiveImageModel[]>((acc, key) => {
            const picture = pictures.find(pic => pic.key === key);
            return picture ? [...acc, picture] : acc;
        }, []);
    } else {
        return pictures.find(pic => pic.key === key);
    }
}

// тут как раз прикол что теперь не надо входные типы указывать а выходные автоматом подцепятся, наведи на res
const res = useCmsPicture('key', 'key');
const res1 = useCmsPicture('key');

// ну или так https://stackoverflow.com/questions/52817922/typescript-return-type-depending-on-parameter
// тут прикольно что с одним параметром
declare global {
    interface Window {
        pictures: ProgressiveImageModel[];
    }
}

function fn<T extends string[]>(
    ...keys: T
): (T extends [string] ? ProgressiveImageModel : ProgressiveImageModel[]) | undefined;
function fn<T extends string[]>(...keys: T): ProgressiveImageModel | undefined | ProgressiveImageModel[] {
    const pictures = window.pictures;

    if (!pictures?.length) keys.length < 2 ? undefined : [];

    if (keys?.length) {
        return keys.reduce<ProgressiveImageModel[]>((acc, key) => {
            const picture = pictures.find(pic => pic.key === key);
            return picture ? [...acc, picture] : acc;
        }, []);
    } else {
        const picture = pictures.find(pic => pic.key === keys[0]);

        if (!picture) return undefined;

        return picture;
    }
}

const e = fn('key');
const e2 = fn('key', 'key');

export default {};
