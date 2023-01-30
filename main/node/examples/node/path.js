const path = require('path');

console.log(__dirname); // /Users/max/projects/node-main/examples/node // returns the directory name of the directory containing the JavaScript source code
console.log(__filename); // /Users/max/projects/node-main/examples/node/path.js
console.log(process.cwd()); // /Users/maxmaximov/Projects/react-main/main/node/examples/node // папка в которой запустили процесс,

const { root, dir, base, ext, name } = path.parse(__filename);
console.log(root, dir, base, ext, name); // / /Users/max/projects/node-main/examples/node path.js .js path
