// const glob = require('glob-fs')({ gitignore: true });
// const files = glob.readdirSync('build/static/js/*.chunk.js', {});
//
// const fs = require("fs");
// const file1 = fs.readFileSync(files[0], "utf8");
// const file2 = fs.readFileSync(files[1], "utf8");
// const data = file1 + "\n\n\n" + file2;
// fs.writeFileSync("build/reactFragment.js", data);

const glob = require('glob-fs')({ gitignore: true });
const files = glob.readdirSync('build/static/js/*.js', {});
const fs = require("fs");
const file1 = fs.readFileSync(files[0], "utf8");
fs.writeFileSync("build/reactFragment.js", file1);
