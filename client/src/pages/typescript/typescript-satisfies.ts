interface SatisfiesModel {
    prop: string;
}

type SatisfiesType = string | SatisfiesModel;

// eslint-disable-next-line
interface SatisfiesVarModel {
    prop: SatisfiesType;
}

// bad
// const variable: SatisfiesVarModel = { prop: '1' };

// good
// const variable1 = { prop: "1" } satisfies SatisfiesVarModel;

// без satisfies будет только toString() и valueOf() методы (это норм так как toString есть в обоих string | SatisfiesModel), если сделать satisfies то появятся остальные методы стринги и тс поймет что это стринга
// variable1.prop = "asd";

export {};
