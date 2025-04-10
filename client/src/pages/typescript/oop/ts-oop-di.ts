/**
 ************************ Dependency Injection ***********************
 */
// Есть 2 слоя
// 1) работа с бизнес логикой 2) с БД
// надо сделать абстракцию (сервис) который бы не зависил от БД
interface UserModel {
    name: string;
}

interface UserDbModel {
    getUsers: () => UserModel[];
}

class UserMongoDB implements UserDbModel {
    getUsers = () => {
        return [{ name: 'Max mongo' }];
    };
}

class UserSqlDB implements UserDbModel {
    getUsers = () => {
        return [{ name: 'Max sql' }];
    };
}

class UserDbService {
    filterUserByName(name: string) {
        this.userDb.getUsers().sort((a, b) => a.name.localeCompare(b.name));
    }

    // аггрегация (вставка объекта из DI)
    constructor(public userDb: UserDbModel) {}
}

// определили как будет работать UserService извне - это DI
const userService = new UserDbService(new UserMongoDB());
const userService1 = new UserDbService(new UserSqlDB());
