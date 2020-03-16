import { gql } from "apollo-server-express";

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
    
    type Query {
        payments: [Payment],
        collections: Collection
        collection(id: ID!): Collection
        getCollectionsByTitle(title: String): Collection
    }
`;

export default typeDefs;
