import express from 'express';
import * as bodyParser from 'body-parser';
import * as path from "path";

import {
    articlesRouter,
    commentsRouter,
    familyRouter,
    frameworksRouter,
    hooksRouter,
    monsterRouter,
    postsRouter,
    streamsRouter,
    usersRouter,
    paymentRouter,
} from './routers';

// const cors = require('cors');

const app = express(),
    port = process.env.PORT || 3001,
    root = '/api/',
    isProduction = process.env.NODE_ENV === "production";

// если так то не работает delete метод, по непонятной причине потом заработало
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Max-Age", 600);
    next();
});

// Передаю в переменнные окружения значения из .env с помощью dotenv нпм пакета
if (!isProduction) {
    require('dotenv').config();
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
        url: 'articles',
        middleware: articlesRouter
    },
    {
        url: 'family',
        middleware: familyRouter
    },
    {
        url: 'comments',
        middleware: commentsRouter
    },
    {
        url: 'posts',
        middleware: postsRouter
    },
    {
        url: 'frameworks',
        middleware: frameworksRouter
    },
    {
        url: 'users',
        middleware: usersRouter
    },
    {
        url: 'streams',
        middleware: streamsRouter
    },
    {
        url: 'hooks',
        middleware: hooksRouter
    },
    {
        url: 'monsters',
        middleware: monsterRouter
    },
    {
        url: 'payment',
        middleware: paymentRouter
    }
];

// автоматом все запросы приходят с боди json (аля fetch => data.json())
app.use(bodyParser.json());
// проверка что url не содержат лишних символов пробелов и тд
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

appRouters.forEach(router => app.use(root + router.url, router.middleware));

// сервлю статические файлы
if (isProduction) {
    app.use(express.static(path.join(__dirname, "../client/build")));

    app.get("*", (req, res) => {
        res.send(path.join(__dirname, '../client/build', 'index.html'));
    });
}

app.listen(port, (error) => {
    if (error) throw error;
    console.log(`Mock server is listening on port ${port}`);
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
