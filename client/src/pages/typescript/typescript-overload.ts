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
    if (!pictures?.length) return keys ? [] : undefined;

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

export default {};
