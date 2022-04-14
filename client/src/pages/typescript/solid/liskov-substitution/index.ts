/*
 * L - Liskov substitution principle - Принцип подстановки Барбары Лисков
 * Функции/сущности которые используют родительский тип должны точно также работать и с дочерними классами, те наследуемый класс должен дополнять а не замещать поведение базового класса
 *
 * Пример - есть какой-то SomeClass и в нем move. В качестве аргумента эта функция принимает класс, допустим Character. У класса Character есть метод move. И move в SomeClass вызывает move у Character. И предположим есть класс Archer который наследуется от Character и мы должны быть уверены что если в SomeClass move мы передадим сущность Archer (а не Character) то объект класса Archer будет работать также как и Character и ничего не сломается
 *
 * */

class Character {
    move() {}
}

class Archer extends Character {
    move() {
        super.move();
        // доп код
    }
}

class SomeClass {
    move(character: Character) {
        character.move();
    }
}

const someClass = new SomeClass();
someClass.move(new Character()); // и тут
someClass.move(new Archer()); // и тут должно работать

// Пример 2
// На картинке история о том что все наследники класса Person должны расширять а не замещать функционал. К примеру если MobileDeveloper не будет выполнять writeCode() который заложен в классе Developer то мы получим ошибки и неожиданный результат

// Пример 3
// Есть
class BadDB {
    connect() {}
    read() {}
    write() {}
    joinTables() {} // предположим что не знаем о sql nosql разнице и вставили в базовый класс этот метод
}

// relational - реляционная ДБ
class BadMySqlDB extends BadDB {}
class BadMyNoSqlDB extends BadDB {
    // у NoSqlDB нет связанных таблиц а есть коллекции документы и она не реляционная и значит решили что joinTables() {} не работает и не нужен
    joinTables() {
        throw new Error('not relational DB error');
    }
}

// правильно было бы сделать еще 2 класса с наследованием от базового
class GoodDB {
    connect() {}
    read() {}
    write() {}
}

class GoodSqlDB extends GoodDB {
    joinTables() {}
}

class GoodNoSqlDB extends GoodDB {
    createIndex() {}
}

class MySqlDB extends GoodSqlDB {}
class MyNoSqlDB extends GoodNoSqlDB {}

// и теперь при использовании мы ожидаем что у любых потомков GoodDB сработают нужный метод connect который не замещает а дополняет поведение базового класса
function startApp(db: GoodDB) {
    db.connect();
}

startApp(new MySqlDB());
startApp(new MyNoSqlDB());

// в примере с фронта: есть форма, добавляем в нее пропс и в зависимости от того что это за пропс делаем развилку на
// function Form({prop}) {
//     { prop && <div></div> }
// }
// а затем еще 1 проп
// function Form({prop, prop2}}) {
//     { prop && <div>1 <CompBase/></div> }
//     { prop2  && <div>2 <CompBase/></div> }
// }
// лучше разбить на 2 компонента и базовый компонент FormProp и FormProp2 которые будут включать базовый компонент
// function CompBase() {
//     return <div />;
// }
//
// function FormGroup1() {
//     return <div>1 <CompBase/></div>;
// }
//
// function FormGroup2() {
//     return <div>2 <CompBase/></div>;
// }

// function FormProp() {
//     return <FormGroup1 />;
// }
//
// function FormProp2() {
//     return <FormGroup2 />;
// }

// function FormPropAndProp2() {
//     return <><FormGroup1 /><FormGroup2 /></>;
// }

// те декомпозируем компоненты, тут в принципе на каком-то этапе можно будет убрать пропсы (отказаться от них) и вставлять то что нужно в данном месте

export default {};
