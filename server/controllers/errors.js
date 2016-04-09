'use strict';

var logger = require("../libs/logger");

module.exports = function(res, err) {
    logger.error(err);
    res.status(500);
    res.send({
        message: err
    })
};
