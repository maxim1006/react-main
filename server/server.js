import express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import { ApolloServer } from "apollo-server-express";
import {
    articlesRouter,
    commentsRouter,
    doorsRouter,
    familyRouter,
    fetchRouter,
    frameworksRouter,
    hooksRouter,
    monsterRouter,
    paymentRouter,
    postsRouter,
    skillsRouter,
    streamsRouter,
    usersRouter,
    plansRouter
} from "./routers";
import schema from "./gql/schema";
import resolvers from "./gql/resolvers";
import "./db/db.js";

// const cors = require('cors');

const app = express(),
    port = process.env.PORT || 3001,
    gqlPport = process.env.GQL_PORT || 3002,
    root = "/api/",
    isProduction = process.env.NODE_ENV === "production";

// если так то не работает delete метод, по непонятной причине потом заработало
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, PUT, POST, DELETE, OPTIONS, PATCH"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Max-Age", 600);
    next();
});

// Передаю в переменнные окружения значения из .env с помощью dotenv нпм пакета
if (!isProduction) {
    require("dotenv").config();
}

// использую middleware cors package
// app.use(cors(
// {
//     origin: "*",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     preflightContinue: false
//   }
//));

// Add your mock router here
const appRouters = [
    {
        url: "articles",
        middleware: articlesRouter
    },
    {
        url: "family",
        middleware: familyRouter
    },
    {
        url: "comments",
        middleware: commentsRouter
    },
    {
        url: "posts",
        middleware: postsRouter
    },
    {
        url: "frameworks",
        middleware: frameworksRouter
    },
    {
        url: "users",
        middleware: usersRouter
    },
    {
        url: "streams",
        middleware: streamsRouter
    },
    {
        url: "hooks",
        middleware: hooksRouter
    },
    {
        url: "monsters",
        middleware: monsterRouter
    },
    {
        url: "payment",
        middleware: paymentRouter
    },
    {
        url: "skills",
        middleware: skillsRouter
    },
    {
        url: "doors",
        middleware: doorsRouter
    },
    {
        url: "fetch",
        middleware: fetchRouter
    },
    {
        url: "plans",
        middleware: plansRouter
    }
];

// автоматом все запросы приходят с боди json (аля fetch => data.json())
app.use(bodyParser.json());
// проверка что url не содержат лишних символов пробелов и тд
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

appRouters.forEach(router => app.use(root + router.url, router.middleware));

// сервлю статические файлы
if (isProduction) {
    app.use(express.static(path.join(__dirname, "../client/build")));

    app.get("*", (req, res) => {
        res.send(path.join(__dirname, "../client/build", "index.html"));
    });
}

// настраиваю gql
const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    playground: !isProduction,
    // disable preflight request
    cors: {
        maxAge: 600
    }
});

server.applyMiddleware({ app });

// тут playground
// console.log(server.graphqlPath); // http://localhost:3001/graphql

app.listen(port, error => {
    if (error) throw error;
    console.log(`Mock server is listening on port ${port}`);
    console.log("ApolloServer on http://localhost:3001/graphql");
});

// firestore
// try {
//     const billingAccountSummary = await admin
//         .firestore()
//         .collection('billing-account-summary')
//         .get();
//
//     // {"name":"billing account summary name","type":"external","balance":1000,"status":"enabled"}
//
//     return billingAccountSummary.docs[0].data();
//
// } catch (e) {
//     throw new ApolloError(e);
// }
