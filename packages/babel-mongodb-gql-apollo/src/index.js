import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './gql/resolvers/resolvers';
import mongoose from 'mongoose';
import { typeDefs } from './gql/typeDefs/typeDefs';

const startServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const app = express();
    server.applyMiddleware({ app });

    try {
        // await mongoose.connect('mongodb://localhost:27017/reactDB', {
        await mongoose.connect(
            'mongodb+srv://max:1qaz2wsx@cluster0.u2voo.mongodb.net/kittens?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
    } catch (e) {
        console.log(e);
    }

    app.listen({ port: 4001 }, () => console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`));
};

startServer();
