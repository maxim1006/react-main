type User = {
    name: string;
    age: number;
};

let user: User = {
    name: 'Max',
    age: 33,
};

// can make Partial object with props

let partialUser: Partial<User> = {
    name: 'Aliya',
};

console.log(user, partialUser);

export default {};
