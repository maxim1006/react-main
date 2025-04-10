/*eslint-disable*/

/*********************** Inheritance ***********************/
/** абстрактный класс использую если нужен контракт+общая логика, он может
 - содержать обычные методы
 - свойства со значениями по-умолчанию
 - может иметь конструктор
 - может иметь абстрактные методы без реализации, которые должен реализовать наследник
 */
abstract class Person {
    private _name: string = 'default name';
    protected _defaultProp = 'default prop';

    abstract abstractMethod(): void;

    constructor(name: string) {
        console.log('default name', name);
        this._name = name;
    }
}

class WorkerPerson extends Person {
    private _age: number = 0;

    // не забываем что если есть указатель видимости то тс свойство сразу положит в объект
    constructor(
        name: string,
        public occupation: string,
    ) {
        super(name);
        this.abstractMethod();
    }

    abstractMethod() {
        console.log('abstractMethod with default prop from parent ', this._defaultProp);
    }
}

const worker = new WorkerPerson('Max', 'developer'); // {"_name": "Max", "occupation": "developer"}
