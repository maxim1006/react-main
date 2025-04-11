interface SatisfiesModel {
    prop: string;
}

type SatisfiesType = string | SatisfiesModel;

// eslint-disable-next-line
interface SatisfiesVarModel {
    prop: SatisfiesType;
}

// bad
const variable: SatisfiesVarModel = { prop: '1' };

// good
const variable1 = { prop: '1' } satisfies SatisfiesVarModel;

// satisfies — проверка без потери информации.
// Type — строгая привязка с возможной потерей лишних данных.
// satisfies не позволяет лишние свойства в литералах объектов, потому что TypeScript применяет так называемое excess property checks — проверку на лишние свойства, только при литеральных объектах.
// без satisfies будет только toString() и valueOf() методы (это норм так как toString есть в обоих string | SatisfiesModel), если сделать satisfies то появятся остальные методы стринги и тс поймет что это стринга
variable.prop; // толкьо toString() и valueOf()
variable1.prop; // все пропсы стринги

// отличный пример для понимания
type A = { foo: string };

/** тут ошибки нет так как TypeScript делает дополнительную проверку на лишние свойства только в том случае, когда ты непосредственно указываешь объект в месте, где требуется определённый тип. (excess property checks - это механизм для ловли опечаток или ошибок при создании объектов.) Здесь temp — это переменная, и TypeScript не применяет проверку на лишние поля он думает: «Ну, ты сам определил temp, возможно, ты используешь его где-то ещё, так что я не буду ругаться из-за лишнего поля».
 * например
 *
 * type User = {
 *     name: string;
 * };
 *
 * const user1: User = {
 *     name: 'Max',
 *     email: 'Max@Max.com', // ругань на email
 * };
 *
 * const user2 = {
 *     name: 'Max',
 *     email: 'Max@Max.com',
 * };
 *
 * const temp: User = user2; // а так нет ошибки
 *
 */

const x = { foo: 'bar', extra: 123 };
const tempX = x satisfies A; // заметь тут нет ошибки так как excess property checks был проведен на строке выше

// так будет ошибка тип A сузил типы для y до A
// const y: A = { foo: 'bar', extra: 123 };
// const tempY = y satisfies A;

// example2
type PersonInfo = PersonName | OtherDetails;
type PersonName = 'John' | 'Jack' | 'Justin';
type OtherDetails = {
    id: number;
    age: number;
};
type Person = {
    myInfo: PersonInfo;
    myOtherInfo: PersonInfo;
};

// так будет ошибка
const applicant: Person = {
    myInfo: 'John',
    myOtherInfo: { id: 123, age: 22 },
};

// applicant.myInfo.toUpperCase(); // так ошибка так как ts не знает PersonInfo это PersonName | OtherDetails;

// так отработает
const applicant1 = {
    myInfo: 'John',
    myOtherInfo: { id: 123, age: 22 },
} satisfies Person;

// applicant.myInfo.toUpperCase(); а так норм
applicant1.myInfo.toUpperCase();

export {};
