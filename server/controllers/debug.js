'use strict';

var logger = require("../libs/logger");

module.exports.stats = function stats (req, res) {
    var resp = {
        startup: req.app.locals.startup,
        uptime: (new Date()) - req.app.locals.startup,
        state: "OK"
    };
    // logger.debug(resp)
    res.send(resp);
};
