/* eslint-disable */
/*
 * S - single responsibility principle
 * */

const generateId = Date.now() * Math.random();

/*Пример 1*/

// плохо
class BadUser {
    constructor(public name: string, public age: number, public password: string) {}

    // и у него куча доп методов, хотя они должны быть в отдельных классах
    saveToDB() {}
    log() {}
    send() {}
}

// хорошо, выношу все что не касается юзера в отдельные классы, более того разграничиваю модель данных и поведение
class GoodUser {
    constructor(public name: string, public age: number, public password: string) {}
}

class UserRepo {
    saveToDB(user: GoodUser) {
        // сохранение в бд
    }
}

class UserLog {
    log(user: GoodUser) {
        console.log(user);
    }
}

class UserController {
    send(user: GoodUser) {
        // return http.send()
    }
}

/*Пример 2*/

// плохо
class BadDataFetcher {
    get(url: string) {}
    delete() {}
    post() {}
    put() {}

    // и сюда добавляю отдельные методы по сущностям - так плохо
    getUser(id: number) {
        // this.get(url, id);
    }

    getRequisite() {}
    getClients() {}
}

// Хорошо- разнести ответственность, вынести клиент, а DataFetcher разделить на несколько сервисов
class GoodHttpClient {
    get(url: string, data: unknown) {}
    delete() {}
    post() {}
    put() {}
}

class UserService {
    constructor(public httpClient: GoodHttpClient) {}
    getOneUser() {}
    getAllUsers() {}
}

class RequisiteService {
    constructor(public httpClient: GoodHttpClient) {}
    getOneRequisite() {}
    getAllRequisites() {}
}

class ClientService {
    constructor(public httpClient: GoodHttpClient) {}
    getAllClients() {}
}

// На примере реакта это означает что если у меня есть форма для создания юзера, и есть типы юзеров Russian и Foreign то я должен создать компоненту createUserForm и над ней уже контейнеры createRussianUserForm и createForeignUserForm, а не пихать все в одно. Тоже и с экшенами createUserForm и readOnlyCreateUserForm нужны разные компоненты

export default {};
