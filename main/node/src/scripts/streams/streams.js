import { Readable, Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import http from 'http';

/*
Бывают несколько видов стримов
Readable, Writable, Duplex, Transform, по-умолчанию в readable стриме читается по 64кб
*/

// Create transform streams with clean, focused logic
const upperCaseTransform = new Transform({
    // передача в трансформ объекты/числа/массивы — только в objectMode: true. Без него только строка / Buffer
    objectMode: true,
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    },
});

const loggerTransform = new Transform({
    transform(chunk, encoding, callback) {
        console.log('loggerTransform chunk', chunk);
        // в callback передаю то что дальше прокидываю
        callback(null, chunk);
    },
});

const readableStream = createReadStream('input.json');

['data', 'open', 'end', 'error'].forEach(eventType => {
    readableStream.on(eventType, chunk => {
        if (eventType === 'data') console.log(`chunk ${chunk}`);

        console.log(`readableStream ${eventType}`);
    });
});

// Process files with robust error handling
async function processFile(inputFile = 'input.json', outputFile = 'output.json') {
    try {
        //pipeline собирает потоки и преобразует их с помощью хелперов
        await pipeline(
            readableStream,
            upperCaseTransform,
            loggerTransform,
            createWriteStream(outputFile),
        );
        console.log('File processed successfully');
    } catch (error) {
        console.error('Pipeline failed:', error);
        throw error;
    }
}

void processFile();
/*
http, request и response на самом деле тоже streams / потоки
похожая реализация в streaming.ts
чтобы посмотреть как приходит стриминг - то надо не в хроме смотреть
curl -v --raw http://localhost:3003/
*/
http.createServer(async (request, response) => {
    response.setHeader('Content-Type', 'application/json');

    const result = JSON.stringify({
        message: 'Hello mom from Max',
    });

    const readableStream = new Readable({
        read(size) {
            setTimeout(() => {
                this.push(result.slice(9, 18));
            }, 1000);

            setTimeout(() => {
                this.push(result.slice(18));
                this.push(null); // конец потока
            }, 2000);
        },
    });

    readableStream.on('data', chunk => console.log('http readableStream', chunk.toString()));

    // вот так красивенько можно передавать в resopnse
    readableStream.pipe(response);
}).listen(3003);

// Create a Web Stream (compatible with browsers)
const webReadable = new ReadableStream({
    start(controller) {
        controller.enqueue('Hello ');
        controller.enqueue('World!');
        controller.close();
    },
});

// Convert between Web Streams and Node.js streams
const nodeStream = Readable.fromWeb(webReadable);
const backToWeb = Readable.toWeb(nodeStream);
const textFromNode = await new Response(Readable.toWeb(nodeStream)).text();
const textFromWeb = await new Response(backToWeb).text();

console.log(textFromNode, textFromWeb);
