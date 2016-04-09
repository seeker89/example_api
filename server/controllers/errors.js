'use strict';

var logger = require("../libs/logger");

module.exports.sendError = function(res, err) {
    if (!err.code || err.code == 500){
        logger.error(err);
    } else {
        logger.warn(err)
    }
    res.status(err.code || 500);
    res.send({
        message: err.message || err.toString()
    })
};

module.exports.throwNotFound = function(msg) {
    var err = new Error(msg);
    err.code = 404;
    throw err;
};
