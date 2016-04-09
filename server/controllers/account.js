'use strict';

var logger = require("../libs/logger");
var handler = require("./errors");

var AccountManager = require('../models/account_memory');


var Account = require('./AccountService');

/*

    Creates a new account for a particular user.

    - verify user exists,
    - create the account
    - create intial transaction

 */
module.exports.createAccount = function createAccount (req, res, next) {

    var params = req.swagger.params.body.value;

    AccountManager.create({
        name: params.name,
        ownerId: params.customer.id
    }).then(function(account){
        res.send(account.toObject());
    }).catch(function(err){
        handler.send(err);
    });
};

module.exports.getAccount = function getAccount (req, res, next) {
    
    var id = req.swagger.params.accountId.value;
    
    AccountManager.findByNumber(id)
    .then(function(account){
        if (!account){
            handler.notFound(res);
        } else {
            res.send(account.toObject());
        }
    }).catch(function(err){
        handler.send(err);
    });
};

module.exports.createTransfer = function createTransfer (req, res, next) {
  Account.createTransfer(req.swagger.params, res, next);
};

module.exports.getAccountHistory = function getAccountHistory (req, res, next) {
  Account.getAccountHistory(req.swagger.params, res, next);
};
