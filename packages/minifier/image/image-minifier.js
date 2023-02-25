const fse = require('fs-extra');
const path = require('path');
const Jimp = require('jimp');

console.log(__dirname);

(async () => {
    const inputFolder = path.resolve(__dirname, './input');
    const outputFolder = path.resolve(__dirname, './output');
    const files = await fse.readdir(path.resolve(inputFolder));

    // create folder
    if (!fse.existsSync(`./output`)) {
        fse.mkdirSync(`./output`, { recursive: true });
    }

    // copy and rename files
    for (let file of files) {
        const curFile = await Jimp.read(`${inputFolder}/${file}`);

        const fileWithoutExt = path.parse(file).name;

        /*
         * чтобы нормально заработал JIMP нужно тут
         *  \node_modules@jimp\core\dist\utils\image-bitmap.js:196 line
         * поправить
         * this.bitmap = this.constructor.decoders[_mime](data);
         * this.bitmap = this.constructor.decoders[_mime](data, {maxMemoryUsageInMB: 2000});
         * */
        await curFile
            .resize(300, Jimp.AUTO) // resize
            .quality(80) // set JPEG quality
            // .greyscale() // set greyscale
            .write(`${outputFolder}/${fileWithoutExt}.jpg`); // save
    }
})();
