import { appendFile, writeFile, readFile, rm } from 'node:fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// создать папку
// await mkdir(path.resolve(__dirname, 'new-folder', 'new-folder1'), { recursive: true }).catch(
//     console.error,
// );
//
// setTimeout(async () => {
//     await rmdir(path.resolve(__dirname, 'new-folder'), { recursive: true });
// }, 5000);

// создать файл
const userData = { name: 'Max' };
await writeFile(
    path.join(__dirname, '..', 'examples', 'test.json'),
    JSON.stringify(userData, null, 2),
);

// записать в конец файла
await appendFile(
    path.join(__dirname, '..', 'examples', 'test.json'),
    JSON.stringify(userData, null, 2),
);

// читаем файл с { encoding: 'utf8' } будет строка, без <Buffer
console.log(
    await readFile(path.join(__dirname, '..', 'examples', 'test.json'), { encoding: 'utf8' }),
);

// удаляем файл
setTimeout(async () => {
    await rm(path.join(__dirname, '..', 'examples', 'test.json'));
}, 5000);
