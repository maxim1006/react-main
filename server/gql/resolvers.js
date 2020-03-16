import collections from "../mocks/collections";

const resolvers = {
    Query: {
        async payments(root, args) {
            return [{
                name: "Payment1"
            }]
        },
        collections: (root, args, ctx, info) => {
            return Object.values(collections);
        },
        collection: (root, { id }, ctx) => collections[id],
        getCollectionsByTitle: (root, { title }, ctx) => {
            const collectionArray = Object.values(collections).filter(collection => collection.title === title);
            return collectionArray.length ? collections[collectionArray[0].id] : {};
        }
    }
};

export default resolvers;
