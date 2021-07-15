const fs = require("fs");
const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.static('public'));

app.get("/health", function (request, response) {
    response.send("OK");
});

app.get("/fragmentMetadata", function (request, response) {
    if (request.query.id === "angularFragment") {
        response.type('json')
        response.send('{"js": "//localhost:5001/fragmentResource?id=angularFragment.js"}');
    } else if (request.query.id === "reactFragment") {
        response.type('json')
        response.send('{"js": "//localhost:5001/fragmentResource?id=reactFragment.js"}');
    } else {
        response.send("ERROR").status(500);
    }
});

app.get("/fragmentResource", function (request, response) {
    if (request.query.id === "angularFragment.js") {
        const contents = fs.readFileSync('../angular-fragment/dist/angularFragment.js', 'utf8');
        response.send(contents);
    } else if (request.query.id === "reactFragment.js") {
        const contents = fs.readFileSync('../react-fragment/build/reactFragment.js', 'utf8');
        response.send(contents);
    } else {
        response.send("ERROR").status(500);
    }
});

app.listen(5001);
