import fs from 'fs';
import path from 'path';

// проверить есть ли папки, если нет - создать
async function checkAndCreateFolder(name = `../examples/dist/test`) {
    if (!fs.existsSync(name)) {
        fs.mkdirSync(name, { recursive: true });
    }
}

// void checkAndCreateFolder();

// прочитать файл и записать файл
async function readAndWriteFileSync() {
    const pathRead = path.join(__dirname, '../examples/src/readFile.js');
    const pathWrite = path.join(__dirname, '../examples/dist/writeFile.js');
    const mainTsData = fs.readFileSync(pathRead, 'utf8');
    fs.writeFileSync(pathWrite, mainTsData);
}

// void readAndWriteFileSync();

// скопировать файл
async function copyFile(
    from = path.join(__dirname, '../examples/src/copyFile.js'),
    to = path.join(__dirname, '../examples/dist/copyFileDist.js'),
) {
    fs.copyFile(from, to, err => {
        if (err) throw err;
        console.log(`${from} was copied to ${to}`);
    });
}

// void copyFile();

// читать файл
function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) reject(err);

            console.log(data);
        });
    });
}

async function readFilePromises(filePath) {
    const data = await fs.promises
        .readFile(path.resolve(process.cwd(), filePath), {
            encoding: 'utf-8',
        })
        .catch(e => console.error('readFilePromises error ', e));

    console.log(data);
}

// void readFile('../examples/src/readFile.js'); // "Hello!"
// void readFilePromises('../examples/src/readFile.js'); // "Hello!"

// заменить инфо в файле по регэкспу
async function replaceInFile(filePath, searchRegex, replaceString) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) reject(err);

            const result = data.replace(searchRegex, replaceString);

            fs.writeFile(filePath, result, 'utf8', err => {
                if (err) reject(err);

                resolve();
            });
        });
    });
}

async function replaceInFilePromises(filePath, searchRegex, replaceString) {
    const curPath = path.resolve(process.cwd(), filePath);
    const data = await fs.promises.readFile(curPath, {
        encoding: 'utf-8',
    });

    const result = data.replace(searchRegex, replaceString);

    await fs.promises.writeFile(curPath, result, {
        encoding: 'utf-8',
    });
}

// void replaceInFile('../examples/src/replaceInFile.js', /Hello/g, 'Hello mom!');
// void replaceInFilePromises('../examples/src/replaceInFile.js', /Hello/g, 'Hello mom!');

// переместить файл
async function moveFile(
    from = path.join(__dirname, '../examples/src/moveFile.js'),
    to = path.join(__dirname, '../examples/dist/moveFile.js'),
) {
    return new Promise((resolve, reject) => {
        fs.rename(path.resolve(from), path.resolve(to), err => {
            if (err) reject('ERROR: ' + err);
            resolve();
        });
    });
}

async function moveFilePromises(
    from = path.join(__dirname, '../examples/src/moveFile.js'),
    to = path.join(__dirname, '../examples/dist/moveFile.js'),
) {
    fs.promises
        .rename(path.resolve(from), path.resolve(to))
        .catch(e => console.log('moveFilePromises ', e));
}

// void moveFile();
// void moveFilePromises();

// get files/dirs/filesAndDirs from Dir
(async () => {
    async function getFilesAndDirs(dir = path.resolve(__dirname, '../examples/dist'), res = []) {
        let assets = await fs.promises.readdir(dir);

        for (let i of assets) {
            const curPath = path.join(dir, i);

            res.push(curPath);

            if (fs.lstatSync(curPath).isDirectory()) await getFilesAndDirs(curPath, res);
        }

        return res;
    }

    // console.log('getFilesFromDir ', await getFilesAndDirs());
    // console.log(
    //     'getFiles ',
    //     (await getFilesAndDirs()).filter(i => !fs.lstatSync(i).isDirectory())
    // );
    // console.log(
    //     'getFilesDirs ',
    //     (await getFilesAndDirs()).filter(i => fs.lstatSync(i).isDirectory())
    // );
})();

export { checkAndCreateFolder };
