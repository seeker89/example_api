'use strict';

var logger = require("../libs/logger");

module.exports.send = function(res, err) {
    logger.error(err);
    res.status(500);
    res.send({
        message: err
    })
};

module.exports.notFound = function(res) {
    res.status(404);
    res.send({
        message: "Entity not found"
    })
};
