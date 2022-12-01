// import * as http from 'http';
const fsPromises = require('fs/promises');
const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

ffmpeg.setFfmpegPath(ffmpegPath);

async function main() {
    let files = await fsPromises.readdir('./src');

    console.log(files);

    const stream = fs.createWriteStream(`./dist/${files[0]}`);

    ffmpeg({ source: path.resolve('./src', files[0]), nolog: false })
        .format('avi')
        .updateFlvMetadata()
        // .size('640x480')
        .output(stream)
        .on('error', function (err, stdout, stderr) {
            console.log('Cannot process video: ' + err.message);
        })
        .on('end', function () {
            console.log('Finished processing');
        })
        .run();
}

main();

function convertFile(ffmpeg, file) {
    return new Promise((res, rej) => {});
}
