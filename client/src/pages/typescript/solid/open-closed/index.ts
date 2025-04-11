/*eslint-disable*/
/*
 * O - open/close principle - программные сущности должны быть открыты для расширения но закрыты для изменения. Изменять код - это плохо и необходимо делать регрессию и регрессионное тестирование.
 *
 *
 * */

// Плохой пример
class BadWeapon {
    constructor(
        public type: string,
        public damage: number,
    ) {}

    attack() {
        console.log('удар мечом ' + this.damage);
    }
}

// тут надо обратить внимание что тип закидываю в конструктор
void new BadWeapon('sword', 15).attack(); // удар мечом 15
void new BadWeapon('crossbow', 30).attack(); // удар мечом 30
// вследствие чего для нормально console.log('удар мечом ' для арбалета нужно ставить if на тип... и тогда будет изменение и нарушение принципа

// Хороший пример
// надо создать базовый класс
interface GoodAttacker {
    attack: () => void;
    // тоже что и выше
    // attack(): void;
}

abstract class GoodWeapon implements GoodAttacker {
    protected constructor(
        public type: string,
        public damage: number,
    ) {}
    attack() {}
}

class Sword extends GoodWeapon {
    constructor() {
        super('sword', 15);
    }

    attack() {
        console.log(`удар ${this.type} ` + this.damage);
    }
}

class Crossbow extends GoodWeapon {
    constructor() {
        super('crossbow', 30);
    }
    attack() {
        console.log(`удар ${this.type} ` + this.damage);
    }
}

// тут стоит обратить внимание что раскидал сущности по отдельным классам которые наследуют базовый функционал, а не как в первом случае все кидаю в базовый и теперь и Sword и Crossbow достаточно легко расширять
void new Sword().attack();
void new Crossbow().attack();

// Второй пример
// существует 2 класса PersonList и MusicList и у них обоих есть метод sort(), чтобы его не повторять лучше создать класс абстракцию SortClient и использовать его для сортировки, если понадобятся изменения то лучше менять в этом классе чем в 10ке других, также пример подойдет к dependency inversion
interface PersonModel {}
interface MusicModel {}

class BadPersonList {
    constructor(public persons: PersonModel[]) {}

    sort() {
        // if (1) sort1();
        // if (2) sort2();
        // if (3) sort3();
    }
}

class BadMusicListList {
    constructor(public persons: MusicModel[]) {}
    sort() {
        // if (1) sort1();
        // if (2) sort2();
        // if (3) sort3();
    }
}

// после создания класса который захендлит сортировку и использовать его
class SortClient {
    public static sort<T>(arr: T[]): T[] | undefined {
        if (arr.length === 0) return arr;
        if (arr.length === 1) return arr;
        if (arr.length) return arr;
    }
}

class GoodPersonList {
    constructor(public persons: MusicModel[]) {}

    sort() {
        SortClient.sort(this.persons);
    }
}

class GoodMusicList {
    constructor(public persons: MusicModel[]) {}

    sort() {
        SortClient.sort(this.persons);
    }
}

// если говорить о реакт то не пихаем бесконечное количество свойств в компонент изменяя компонент, а путем создания нового компонента обертки расширяющего возможности старого

// в картинке представлен вариант с полиморфизмом, есть 2 расширяем функционал не наследованием, а создаем интерфейс, имплементируем его в обоих классах, а если во 2м классе нужен функционал первого то стоит воспользоваться делигировоанием

export default {};
