import { createLogger, format, transports } from 'winston';
import util from 'util';

export const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.errors({ stack: true }),
        format.splat(),
        format.json()
    ),
    // defaultMeta: { service: 'maximprosvbot' },
    transports: [
        //
        // - Write to all logs with level `info` and below to `quick-start-combined.log`.
        // - Write all logs error (and below) to `quick-start-error.log`.
        //
        // new transports.File({ filename: 'quick-start-error.log', level: 'error' }),
        new transports.File({ filename: 'error.log', level: 'error' }),
    ],
});

//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new transports.Console({
            format: format.combine(format.colorize(), format.simple()),
        })
    );
}

// logger.log('error', 'Important error: ', new Error('Error passed as meta'));
// logger.warn('Maybe important error: ', new Error('Error passed as meta'));
// logger.error(new Error('Error as info'));

console.log = function (str: string) {
    process.stdout.write(util.format.apply(null, arguments) + '\n');
};

console.error = function () {
    let str = util.format.apply(null, arguments) + '\n';
    logger.error('Caught exception: ' + str);
    // process.stdout.write(str);
};

process.on('uncaughtException', function () {
    let str = util.format.apply(null, arguments) + '\n';
    logger.error('Uncaught exception: ' + str);
    // process.stdout.write('Uncaught exception: ' + str);
});
