var winston = require('winston');

var consoleLogger = new winston.transports.Console({
    level: 'debug',
    timestamp: function() {
        return new Date().toString();
    },
    colorize: true,
    prettyPrint: true,
    inlineMeta: true
});

var logger = new winston.Logger({
    transports: [
        consoleLogger
    ],
    exitOnError: false
});
logger.stream = {
    write: function(message, encoding){
        logger.debug(message);
    }
};

logger.info('Logger initialized at ' + new Date());

module.exports = logger;