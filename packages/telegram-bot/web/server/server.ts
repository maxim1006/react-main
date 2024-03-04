import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';

const app = express();

// compress
function shouldCompress(req: express.Request, res: express.Response) {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false;
    }

    // fallback to standard filter function
    return compression.filter(req, res);
}

app.use(compression({ filter: shouldCompress }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// const corsOptions = {
//     origin: 'https://maximprosv.ru',
//     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

app.use(cors());

app.use(
    helmet({
        // чтобы не ругался на cdn и разрешил eval
        // contentSecurityPolicy: false,
    })
);

app.use((req, res, next) => {
    res.setHeader(
        'Permissions-Policy',
        'camera=(), fullscreen=(self), geolocation=(self), magnetometer=(), microphone=(), midi=(), payment=(), sync-xhr=()'
    );
    next();
});

// serve static
const root = path.join(__dirname, '../client/src');
app.use(express.static(root));
app.get('*', (req, res) => {
    res.sendFile(root + '/index.html');
});

app.listen(3000, () => console.log(`Server is listening on port ${3000}`));
