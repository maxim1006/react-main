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

// без satisfies будет только toString() и valueOf() методы (это норм так как toString есть в обоих string | SatisfiesModel), если сделать satisfies то появятся остальные методы стринги и тс поймет что это стринга
// variable1.prop = "asd";

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
