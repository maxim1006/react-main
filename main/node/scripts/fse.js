const fse = require('fs-extra');
const fs = require('fs');
const path = require('path');

async function fseCopy() {
    const src = path.resolve(__dirname, '../examples/src');
    const dist = path.resolve(__dirname, '../examples/dist');

    // скопирует все файлы из src в dist
    return await Promise.all([fse.copy(src, dist)]);
}

// void fseCopy();

// get files/dirs/filesAndDirs from Dir
(async () => {
    async function getFilesAndDirs(dir = path.resolve(__dirname, '../examples/dist'), res = []) {
        const files = await fse.readdir(path.resolve(dir));

        for (let i of files) {
            const curPath = path.join(dir, i);

            res.push(curPath);

            if (fse.lstatSync(curPath).isDirectory()) await getFilesAndDirs(curPath, res);
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
