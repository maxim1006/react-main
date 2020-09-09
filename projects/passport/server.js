import express from 'express';
import bcrypt from 'bcrypt';
import passport from 'passport';
import initializePassport from './passport-config.js';
import session from 'express-session';
import flash from 'express-flash';
import dotenv from 'dotenv';
import methodOverride from 'method-override';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const app = express();
const users = [];

initializePassport(
    passport,
    email => {
        return users.find(user => user.email === email);
    },
    id => users.find(user => user.id === id)
);

app.set('view-engine', 'ejs');

// чтобы получать с форм в body.req данные
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
// нужно для оверрайда делит метода, который формы не поддерживают на пост
app.use(methodOverride('_method'));

app.get('/', checkAuthenticated, (req, res) => {
    // это из паспорта
    // console.log(req.user);

    res.render('index.ejs', {
        name: req.user.name
    });
});

app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs', {});
});

app.post(
    '/login',
    checkNotAuthenticated,
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })
);

app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs', {});
});

app.post('/register', checkNotAuthenticated, async (req, res) => {
    // console.log(req.body.password);

    try {
        // https://www.npmjs.com/package/bcrypt - for secure passwords
        const password = await bcrypt.hash(req.body.password, 10);
        const { name, email } = req.body;
        users.push({
            id: Date.now().toString(),
            name,
            email,
            password
        });

        res.redirect('/login');
    } catch (error) {
        res.redirect('/register');
        console.log('error ', error);
    }
});

app.delete('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login');
});

app.listen(3000, () => console.log('server is started on port 3000'));

// helpers
function checkAuthenticated(req, res, next) {
    // это из паспорта
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
    // это из паспорта
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }

    next();
}
