const fs = require('fs');
const path = require('path');

// remove moment locales
const directory = './node_modules/moment/locale';

// set locales for current app
const locales = /en-gb|fr|de/;

fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
        if (!locales.test(file)) {
            fs.unlink(path.join(directory, file), err => {
                if (err) throw err;
            });
        }
    }
});
