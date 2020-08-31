const express = require('express');
const cors = require('cors');
// HTTP request logger middleware for node.js
const morgan = require('morgan');
// Helmet helps you secure your Express apps by setting various HTTP headers.
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use(express.static('./public'));

// urls
// app.get('/:id', (req, res) => {});
// app.get('/url/:id', (req, res) => {});
// app.post('/url', (req, res) => {});

// пример использования dotenv
require('dotenv').config();
console.log(process.env.MY_VAR); //some variable

const port = process.env.PORT || 1337;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
