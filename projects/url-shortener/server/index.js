const express = require('express');
const cors = require('cors');
// HTTP request logger middleware for node.js
const morgan = require('morgan');
// Helmet helps you secure your Express apps by setting various HTTP headers.
const helmet = require('helmet');
// пакет для описания и проверки интерфейса объектов
const yup = require('yup');
const { nanoid } = require('nanoid');
const mongoose = require('mongoose');

const app = express();

// пример использования dotenv
require('dotenv').config();
console.log(process.env.MY_VAR); //some variable

// создаю для проверки переданных объектов
const schema = yup.object().shape({
    slug: yup
        .string()
        .trim()
        .matches(/[\w\-]/i),
    url: yup
        .string()
        .trim()
        .url()
        .required()
});

mongoose
    .connect(process.env.MONGODB_URL_SHORTENER, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(
        () => {
            console.log('mongodb://localhost:27017/url-shortener succeed');
        },
        () => {
            console.log('mongodb://localhost:27017/url-shortener error');
        }
    );

// могу подключение монги посмотреть сверзу могу и так как ниже
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     // we're connected!
// });

// создаю схему для url
const urlsSchema = new mongoose.Schema({
    url: { type: String, unique: true, required: true },
    slug: { type: String, unique: true }
});

// создаю модель (всегда будет lowerCase)
const UrlsDbModel = mongoose.model('urls', urlsSchema);

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use(express.static('./public'));

// urls
app.get('/:id', async (req, res) => {
    const { id: slug } = req.params;
    try {
        const { url } = await UrlsDbModel.findOne({ slug }).exec();

        if (url) {
            res.redirect(url);
        }

        res.redirect(`/?error=${slug} not found`);
    } catch (error) {
        console.log('app.get(/:id error ', error);
        res.redirect(`/?error=Link not found`);
    }
});
// app.get('/url/:id', (req, res) => {});

// Немного о точ что такое slug
//‘http://yoursite.com/ref/123’
// With a custom slug of mycustomslug123, the affiliate can now use either of these referral URLs in addition to the above variations:
// ‘http://yoursite.com/?ref=mycustomslug123’
// ‘http://yoursite.com/ref/mycustomslug123’

app.post('/url', async (req, res, next) => {
    let { slug, url } = req.body;

    try {
        if (!slug) {
            slug = nanoid(5);
        }

        slug = slug.toLowerCase();

        await schema.validate({ slug, url });

        // create document instance
        const newUrl = new UrlsDbModel({ slug, url });

        // проверяю на то что slug уже есть
        const existing = await UrlsDbModel.findOne({ slug }).exec();

        if (existing) {
            throw new Error('Slug already in use!');
        }

        // сохраняю в базу данных
        try {
            await newUrl.save();
            console.log('newUrl saved ', JSON.stringify({ slug, url }));

            res.json({ slug, url });
        } catch (e) {
            console.log('newUrl save error ', e);
        }
    } catch (error) {
        console.error("app.post('/url' error ", error);
        next(error);
    }
});

// error handler
app.use((error, req, res, next) => {
    if (error.status) {
        res.status(error.status);
    } else {
        res.status(500);
        console.error('something bad happened');
    }

    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? 'No stack in prod' : error.stack
    });
});

const port = process.env.PORT || 1337;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
