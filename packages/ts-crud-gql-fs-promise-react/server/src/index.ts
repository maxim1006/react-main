import express from 'express';
import { ApolloServer, MockList } from 'apollo-server-express';
import {
    FamilyResolvers,
    SkillsResolvers,
    QueryTypeDefs,
    MutationTypeDefs,
    FamilyTypeDefs,
    SkillsTypeDefs,
    ErrorTypeDefs,
    EntitiesTypedefs,
    EntitiesResolvers,
    TrackTypeDefs,
} from './gql';
import { TrackMock } from './mocks/track.mock';

const apolloServer = new ApolloServer({
    resolvers: {
        Query: {
            ...SkillsResolvers.Query,
            ...FamilyResolvers.Query,
            ...EntitiesResolvers.Query,
        },
        Mutation: {
            ...SkillsResolvers.Mutation,
            ...FamilyResolvers.Mutation,
        },
        Entities: { ...EntitiesResolvers.Entities },
    },
    typeDefs: [
        EntitiesTypedefs,
        QueryTypeDefs,
        MutationTypeDefs,
        FamilyTypeDefs,
        SkillsTypeDefs,
        ErrorTypeDefs,
        TrackTypeDefs,
    ],
    // замокать все автоматом, круто, если поставить true то гкл сам все замокает
    mocks: {
        Query: () => ({
            tracks: () => new MockList([1, 10]),
        }),
        Track: TrackMock,
    },
    // по умолчанию true !!!
    mockEntireSchema: false,
    // через контекст гкл могу достать res req
    context: ({ req, res }) => ({ req, res }),
});

const app = express();
apolloServer.applyMiddleware({ app });

app.use(express.static('./client/build'));

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`));
