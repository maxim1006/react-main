// https://medium.com/@borisa/video-compression-api-ffmpeg-docker-nodejs-express-60e5b3b732f1
// import * as http from 'http';
const fsPromises = require('fs/promises');
const fs = require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

ffmpeg.setFfmpegPath(ffmpegPath);

async function main() {
    const files = await fsPromises.readdir('./src');
    // const file = path.resolve('./src', files[0]);
    //
    // ffmpeg(file)
    //     .fps(30)
    //     // CRF scale is 0–51, where 0 is lossless and 51 is the worst
    //     .addOptions(['-crf 23'])
    //     .on('end', () => {
    //         console.log({ statusCode: 200, text: 'Success' });
    //     })
    //     .on('error', err => {
    //         console.log({ statusCode: 500, text: err.message });
    //     })
    //     .save(`./dist/${files[0]}`);

    convert(files);
}

function convert(files) {
    const curFile = files.pop();

    if (!curFile) {
        console.log('all files converted');
        return;
    }

    const file = path.resolve('./src', curFile);

    ffmpeg(file)
        .fps(30)
        // CRF scale is 0–51, where 0 is lossless and 51 is the worst
        .addOptions(['-crf 23'])
        .on('end', () => {
            console.log({ statusCode: 200, text: 'Success' });
            convert(files);
        })
        .on('error', err => {
            console.log({ statusCode: 500, text: err.message });
        })
        .save(`./dist/${curFile}`);
}

void main();

function convertFile(ffmpeg, file) {
    return new Promise((res, rej) => {});
}
