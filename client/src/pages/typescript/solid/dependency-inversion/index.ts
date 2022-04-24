/*
 * D - Dependency Inversion principle - Принцип инверсии зависимостей
 *
 * Модули высокого уровня не должны зависить от модулей низкого уровня, все они должны зависить от абстракций, а абстракции не должны зависеть от деталей в свою очередь детали должны зависить от абстракций
 *
 * Предположим есть завод и на нем Работники, Станки и Электричество (см картинку). Сломанная деталь в Станке потянет за собой неспособность использовать Работников и Электричество
 *
 * Решение - введение абстракции, для электричества - трансформатор, который для станка подберет нужное напряжение, те появляется некая абстракция, которая не зависит от того с каким станком мы работаем
 *
 * В случае с Работниками вводим абстракцию пульт управления и они работает с интерфейсом, что там внутри не важно они работают с хайлевел уровнем
 * */

/*
 * Пример 2 (folder 2)
 *
 * предположим у нас есть задача создать Post а потом хранить его, сперва в localStorage и мы создаем для него PostLocalStorage с методами локал стораджа, потом понадобился кеш и создаем PostCacheDictionary, потом понадобится ДБ и создаем PostDBRepository, каждый из этих классов работает со своим апи разными методами
 *
 * 1) шаг к улучшению это сделать абстракцию - interface Repository и в каждом из классов имплементируем этот интерфейс и меняем название методов
 * 2) еще круче сделать сущность Storage которая имплементирует Repository. Storage при этом делегирует вызов методов конкретного репозитория. Всегда работаем с этой абстракцией не заморачиваясь деталями.
 * */

/*
 * Пример 3
 * Предположим что надо сделать музыкальное приложение которое потенциально работает с апи нескольких источников. Лучше сделать абстракцию MusicClient которая будет делегировать вызов конкретного класса который умеет работать с конкретным источником. Теперь мы не зависим от источника и можем их расширять
 * */
interface MusicApi {
    getTracks: () => void;
}

class YandexMusic implements MusicApi {
    getTracks(): void {
        // get ya music
    }
}

class SpotifyMusic implements MusicApi {
    getTracks(): void {
        // get spotify music
    }
}

class MusicClient implements MusicApi {
    constructor(public client: MusicApi) {}

    getTracks() {
        // делегирую вызов метода конкретной сущности
        this.client.getTracks();
    }
}

const MusicApp = () => {
    const API = new MusicClient(new YandexMusic());
    API.getTracks();
};

export default {};

// Storage
// В этом примере делаю интерфейс StorageApi и абстракцию StorageClient которая умеет работать со всеми стораджами а также делегирует методы выполнения
interface StorageApi {
    getAll: () => void;
    getOne: () => void;
    add: () => void;
}

class LocalStorageApi implements StorageApi {
    getAll() {
        // get all from LS
    }
    getOne() {
        // get one from LS
    }
    add() {
        // add one from LS
    }
}

class DBApi implements StorageApi {
    getAll() {
        // get all from DB
    }
    getOne() {
        // get one from DB
    }
    add() {
        // add one from DB
    }
}

class StorageClient implements StorageApi {
    constructor(private storageApi: StorageApi) {}

    getAll() {
        this.storageApi.getAll();
    }

    getOne() {
        this.storageApi.getOne();
    }
    add() {
        this.storageApi.add();
    }
}

const StorageApp = function () {
    const storageClient = new StorageClient(new LocalStorageApi());
    storageClient.getAll();
};
