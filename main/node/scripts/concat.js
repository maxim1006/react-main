const concat = require('concat');
const shell = require('shelljs');
const path = require('path');
const { checkAndCreateFolder } = require('./fs');

const srcPath1 = path.resolve(__dirname, '../examples/src/concat/concat1.css');
const srcPath2 = path.resolve(__dirname, '../examples/src/concat/concat2.css');
const concatDistFolderPath = path.resolve(__dirname, '../examples/dist/concat');
const concatDistPath = path.resolve(__dirname, '../examples/dist/concat/main.css');
const cleanCssPath = path.resolve(__dirname, '../node_modules/.bin/cleancss');

(async function build() {
    const files = [srcPath1, srcPath2];

    await checkAndCreateFolder(concatDistFolderPath);

    await concat(files, concatDistPath);

    shell.exec(
        `${cleanCssPath} --inline 'none' -o ${concatDistFolderPath}/main.min.css ${concatDistPath}`,
        () => {
            console.log('concatenated and minified');
        }
    );
})();

// после конкатенирования удаляю ересь и минифинцирую c помощью npm i  clean-css-cli
// cleancss --inline 'none' -o ./examples/files/concat/main.min.css ./examples/files/concat/main.css"
