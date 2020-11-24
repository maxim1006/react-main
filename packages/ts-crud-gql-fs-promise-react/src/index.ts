import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { FamilyResolvers } from './gql/resolvers/family.resolvers';
import { SkillsResolvers } from './gql/resolvers/skills.resolvers';
import { QueryTypeDefs } from './gql/typeDefs/query.typedefs';
import { MutationTypeDefs } from './gql/typeDefs/mutation.typedefs';
import { FamilyTypeDefs } from './gql/typeDefs/family.typedefs';
import { SkillsTypeDefs } from './gql/typeDefs/skills.typedefs';
import { ErrorTypeDefs } from './gql/typeDefs/error.typedefs';

const apolloServer = new ApolloServer({
    resolvers: {
        Query: {
            ...SkillsResolvers.Query,
            ...FamilyResolvers.Query,
        },
        Mutation: {
            ...SkillsResolvers.Mutation,
            ...FamilyResolvers.Mutation,
        },
    },
    typeDefs: [QueryTypeDefs, MutationTypeDefs, FamilyTypeDefs, SkillsTypeDefs, ErrorTypeDefs],
    // через контекст гкл могу достать res req
    context: ({ req, res }) => ({ req, res }),
});

const app = express();
apolloServer.applyMiddleware({ app });

app.use(express.static('./client/build'));

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`));
