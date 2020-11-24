import { Cat } from '../../models/cat';

export const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        cats: () => Cat.find(),
    },
    Mutation: {
        createCat: async (_, { name }) => {
            const kitty = new Cat({ name });
            await kitty.save();
            console.log(kitty);
            return kitty;
        },

        deleteCat: async (_, { name }) => {
            await Cat.deleteMany({ name });
            return true;
        },
    },
};

// mutation {
//     createCat(name:"Max") {
//         id
//         name
//     }
// }
