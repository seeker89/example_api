'use strict';

var url = require('url');


var Debug = require('./DebugService');


module.exports.stats = function stats (req, res, next) {
  Debug.stats(req.swagger.params, res, next);
};
