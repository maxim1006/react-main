import collections from '../mocks/collections';
import { PubSub } from 'apollo-server';

const messages = [];
const MESSAGE_ADDED = 'MESSAGE_ADDED';
export const pubsub = new PubSub();

// как получаю данные
const resolvers = {
    Query: {
        async payments(root, args) {
            return [
                {
                    name: 'Payment1'
                }
            ];
        },
        collections: (root, args, ctx, info) => {
            return Object.values(collections);
        },
        collection: (root, { id }, ctx) => collections[id],
        getCollectionsByTitle: (root, { title }, ctx) => {
            const collectionArray = Object.values(collections).filter(collection => collection.title === title);
            return collectionArray.length ? collections[collectionArray[0].id] : {};
        },
        messages: () => messages
    },
    Mutation: {
        postMessage: (parent, { user, content }) => {
            const id = messages.length;

            messages.push({ id, user, content });
            pubsub.publish(MESSAGE_ADDED, { messages });
            return id;
        }
    },
    Subscription: {
        messages: {
            // Additional event labels can be passed to asyncIterator creation
            subscribe: (parent, args) => {
                // при подписке на канал сразу кидаю сообщения
                setTimeout(() => {
                    pubsub.publish(MESSAGE_ADDED, { messages });
                }, 0);
                return pubsub.asyncIterator([MESSAGE_ADDED]);
            }
        }
    }
};

export default resolvers;

// query {
//     messages {
//         content
//         id
//         user
//     }
// }

// mutation {
//     postMessage(user: "Max", content: "Hello")
// }

// subscription {
//     messages {
//         id
//         user
//         content
//     }
// }
