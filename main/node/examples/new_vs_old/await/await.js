import { readFile } from 'node:fs/promises';

// Верхнеуровневый await: упрощение инициализации
const config = JSON.parse(await readFile('./config.json', 'utf8'));

console.log(config);
