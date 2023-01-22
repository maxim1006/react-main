/* eslint-disable */
// https://stackoverflow.com/questions/55377365/what-does-keyof-typeof-mean-in-typescript

// keyof
interface PersonModel {
    name: string;
    age: number;
    location: string;
}

type PersonKeyofType = keyof PersonModel; // ("name" | "age" | "location")

let valKeyofType: PersonKeyofType = 'name';
// let valKeyofType1: PersonKeyofType = "name1"; // error

// keyof typeof
const person = { name: 'Max', age: 35 };
// type PersonKeyof = keyof person; // error person is not a type
type PersonKeyofTypeOfType = keyof typeof person; // ("name" | "age")

let valKeyofTypeOfType: PersonKeyofTypeOfType = 'name';
// let valKeyofTypeOfType1: PersonKeyofTypeOfType = "name1"; // error

// enum keyof
enum PersonEnum {
    name = 'Max',
    age = 35,
}

type PersonEnumKeyof = keyof PersonEnum;
type PersonEnumKeyofTypeof = keyof typeof PersonEnum;

let valPersonEnumKeyof: PersonEnumKeyof = 'toString'; // "toString" | "valueOf"
let valPersonEnumKeyofTypeof: PersonEnumKeyofTypeof = 'name'; // "name" | "age"

export {};
