import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import fs from 'fs';

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
app.use(cors());
app.use(helmet({}));

app.use((req, res, next) => {
    res.setHeader(
        'Permissions-Policy',
        'camera=(), fullscreen=(self), geolocation=(self), magnetometer=(), microphone=(), midi=(), payment=(), sync-xhr=()'
    );
    next();
});

// serve static
const root = path.join(__dirname, './build');
app.use(express.static(root));
app.get('/api/v1/health/status', (req, res) => {
    res.send('Node server is ok');
});

app.get('/api/v1/node-db', async (req, res) => {
    res.send(await readFile('./node_db/text.txt'));
});

app.get('*', (req, res) => {
    res.sendFile(root + '/index.html');
});

app.listen(3000, () => {
    console.log('BACKEND_ENV_VARIABLE', process.env.BACKEND_ENV_VARIABLE);
    console.log(`Server is listening on port ${3000}`);
});

const readFile = async (dataPath: string) =>
    await fs.promises.readFile(path.resolve(process.cwd(), dataPath), {
        encoding: 'utf-8',
    });
