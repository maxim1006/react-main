import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { EntitiesResolver, FamilyResolver, SkillsResolver } from './type-gql/resolvers';

const main = async () => {
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [EntitiesResolver, FamilyResolver, SkillsResolver],
            validate: false,
        }),
    });

    const app = express();
    apolloServer.applyMiddleware({ app });

    app.use(express.static('./client/build'));

    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`)
    );
};

main();
