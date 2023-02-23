// find all modules in ./dist and change imports to pre/...
const glob = require('glob');
const path = require('path');
const fse = require('fs-extra');

glob(path.resolve(__dirname, '../examples/') + '/**/*.?(js|ts)', {}, (er, filePaths) => {
    console.log(filePaths);

    filePaths.forEach(async filePath => {
        // get file content
        const fileContent = await fse.readFile(filePath, 'utf8');

        // get array of lines
        console.log(
            fileContent
                .split(/\r?\n/)
                .filter(i => !!i)
                .map(item => item.trim())
        );
    });
});
