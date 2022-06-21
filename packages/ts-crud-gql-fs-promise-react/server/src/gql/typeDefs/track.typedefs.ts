import { gql } from 'apollo-server-express';

export const TrackTypeDefs = gql`
    "A track is a number of modules"
    type Track {
        id: ID!
        "The track's title"
        title: String!
        "The track's author"
        author: TrackAuthor!
        thumbnail: String
        length: Int
        modulesCount: Int
    }

    type TrackAuthor {
        id: ID!
        name: String!
        age: Int
        "Author's photo"
        photo: String
    }
`;
