'use strict';

var url = require('url');


var Account = require('./AccountService');


module.exports.createAccount = function createAccount (req, res, next) {
  Account.createAccount(req.swagger.params, res, next);
};

module.exports.createTransfer = function createTransfer (req, res, next) {
  Account.createTransfer(req.swagger.params, res, next);
};

module.exports.getAccount = function getAccount (req, res, next) {
  Account.getAccount(req.swagger.params, res, next);
};

module.exports.createTransfer = function createTransfer (req, res, next) {
  Account.createTransfer(req.swagger.params, res, next);
};

module.exports.getAccountHistory = function getAccountHistory (req, res, next) {
  Account.getAccountHistory(req.swagger.params, res, next);
};
