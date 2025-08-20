import { spawn, exec } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnProcess = spawn('npm', ['run', 'test:watch'], {
    stdio: 'inherit',
    cwd: join(__dirname, '../../'),
});

// альтернатива
const execProcess = exec(
    'npm run test:echo',
    { cwd: join(__dirname, '../../') },
    (error, stdout, stderr) => {
        if (error) {
            console.error('Ошибка:', error);
            return;
        }
        console.log('Вывод:', stdout);
    },
);

const cleanup = () => {
    spawnProcess.kill();
    execProcess.kill();
    process.exit();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
