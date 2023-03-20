// глубокий Partial
type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

type User = {
    name: string;
    age: number;
    deepProp: {
        dp: number;
    };
};

let user: Partial<User> = {
    name: 'Max',
    age: 33,
    // deepProp: {}, // ошбибка
};

let user1: DeepPartial<User> = {
    name: 'Max',
    age: 33,
    deepProp: {}, // ошбибка
};

// can make Partial object with props

let partialUser: Partial<User> = {
    name: 'Aliya',
};

console.log(user, partialUser);
console.log(user1);

export default partialUser;
