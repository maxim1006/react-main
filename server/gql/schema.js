import { gql } from "apollo-server-express";

// олисываю типы данных, которые получаю в resolvers
const typeDefs = gql`
    type Payment {
        name: String!
    }

    type Collection {
        id: ID!
        title: String!
        items: [Item]
    }

    type Item {
        id: ID!
        name: String!
        price: Float!
        imageUrl: String!
        collection: Collection
    }

    type Message {
        id: ID!
        user: String!
        content: String!
    }

    type Query {
        payments: [Payment]
        collections: Collection
        messages: [Message!]
        collection(id: ID!): Collection
        getCollectionsByTitle(title: String): Collection
    }

    type Mutation {
        postMessage(user: String!, content: String!): ID!
    }
`;

export default typeDefs;

// query messages
// query {
//     messages {
//         id
//         content
//         user
//     }
// }
