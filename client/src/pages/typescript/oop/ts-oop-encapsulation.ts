/*eslint-disable*/
/*********************** Encapsulation ***********************/
interface IFamilyMember {
    name: string;
    age: number;
}

class FamilyMember implements IFamilyMember {
    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        this._age = value;
    }

    public get id(): string {
        return this._id;
    }

    private _age: number = 0;
    private _name: string = '';
    private _id;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this._id = String(Date.now());
    }
}

const familyMember = new FamilyMember('Max', 34);
// familyMember._id = ''; // ошибка
