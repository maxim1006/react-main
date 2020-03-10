const resolvers = {
    Query: {
        async payments() {
            return [{
                name: "Payment1"
            }]
        },
    }
};

export default resolvers;

// example of the request
// query {
//     payments {
//         name
//     }
// }
