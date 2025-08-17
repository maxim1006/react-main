import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// это для commonjs
// console.log(__dirname); // /Users/max/projects/node-main/examples/node // returns the directory name of the directory containing the JavaScript source code
// console.log(__filename); // /Users/max/projects/node-main/examples/node/path.js

// Это для es modules
// абсолютный путь к текущему файлу
const __filename = fileURLToPath(import.meta.url);

// абсолютный путь к текущей папке
const __dirname = dirname(__filename);
console.log({ __filename }); // путь к файлу
console.log({ __dirname }); // путь к директории файла

// склеивает, хендлит слеши
const fullPathJoin = path.join('project/', '/src', 'app.js');
console.log(fullPathJoin); // project/src/app.js

// выдает абсолютный путь
const fullPathResolve = path.resolve('project', 'src', 'app.js');
console.log(fullPathResolve); // /Users/mamaksimov/WebstormProjects/react-main/main/node/src/scripts/project/src/app.js

const { root, dir, base, ext, name } = path.parse(__filename);
console.log({ root, dir, base, ext, name }); // / /Users/max/projects/node-main/examples/node path.js .js path
