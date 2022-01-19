const winston = require('winston');
const logDir = './backend/logs';
const fs = require('fs');
const {format } = require('winston');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
    format: format.combine(
        format.timestamp({format:'DD-MM-YYYY HH:mm:ss'}),
        format.json(),
    ),
    transports: [
        new (require('winston-daily-rotate-file'))({
            filename: `${logDir}/%DATE%-log`,
            datePattern: 'DD-MM-YYYY',
            type: 'error',
            extension: '.txt'
        })
    ],
});

module.exports =logger;

// logger.info('info test');
// logger.warn('warn test');
// logger.error('error test');