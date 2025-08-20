console.log(process.pid); // номер процесса ноды - могу посмотреть в activity monitor pid

// получение переменных из .env (уже умеет нода) или dotenv.config()
console.log({ envs: process.env });

console.log({ argvs: process.argv }); /* при команде node process.js --env1=1 --env2=2
получу
argvs: [
    ...
    '--env1=1',
    '--env2=2'
  ]
*/

console.log(process.cwd()); // /Users/maxmaximov/Projects/react-main/main/node/examples/node // папка в которой запустили процесс,

process.on('exit', function (code) {
    process.stdout.write(
        `Process Exit: ${new Date().toISOString()}, code: ${code}, pId: ${process.pid} \n`,
    );
});

const cleanup = () => {
    process.exit();
  }; 
  
process.on('SIGINT', cleanup); // Пользователь нажимает Ctrl+C в терминале
process.on('SIGTERM', cleanup); // Система или другой процесс (например, systemd, Docker, Kubernetes) Стандартный сигнал для завершения процесса

// завершить процесс принудительно
process.exit();
  