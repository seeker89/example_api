'use strict';

var logger = require("../libs/logger");

/*

    Send some stats as a debug endpoint

    https://example-api-bank.herokuapp.com/ui/#!/debug/stats

 */

module.exports.stats = function stats (req, res) {
    var resp = {
        startup: req.app.locals.startup,
        uptime: (new Date()) - req.app.locals.startup,
        state: "OK"
    };
    // logger.debug(resp)
    res.send(resp);
};