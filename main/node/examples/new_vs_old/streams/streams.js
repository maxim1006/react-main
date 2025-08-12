import { Readable, Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

// Create transform streams with clean, focused logic
const upperCaseTransform = new Transform({
    objectMode: true,
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    },
});

// Process files with robust error handling
async function processFile(inputFile = 'input.json', outputFile = 'output.json') {
    try {
        //pipeline собирает потоки и преобразует их с помощью хелперов
        await pipeline(
            createReadStream(inputFile),
            upperCaseTransform,
            createWriteStream(outputFile),
        );
        console.log('File processed successfully');
    } catch (error) {
        console.error('Pipeline failed:', error);
        throw error;
    }
}

void processFile();

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
