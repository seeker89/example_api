'use strict';

var logger = require("../libs/logger");
var ErrorHandler = require("./errors");

var AccountManager = require('../models/account_memory');
var CustomerManager = require('../models/customer_memory');
var TransactionsManager = require('../models/transaction_memory');

/*

    Creates a new account for a particular user.

    - verify user exists,
    - create the account
    - create intial transaction

 */
module.exports.createAccount = function createAccount(req, res, next) {

    var params = req.swagger.params.body.value;

    CustomerManager
    .findById(params.customer.id)
    .then(function(customer){
        if (customer){
            return AccountManager.create({
                name: params.name,
                ownerId: params.customer.id
            });
        }
        ErrorHandler.throwNotFound("Customer not found");
    }).then(function(account){
        res.send(account.toObject());
    }).catch(function(err){
        ErrorHandler.sendError(res, err);
    });
};

module.exports.getAccount = function getAccount(req, res, next) {
    
    var id = req.swagger.params.accountId.value;
    
    AccountManager
    .findByNumber(id)
    .then(function(account){
        if (account){
            return res.send(account.toObject());
        }
        ErrorHandler.throwNotFound("Account not found");
    }).catch(function(err){
        ErrorHandler.sendError(res, err);
    });
};

module.exports.createTransfer = function createTransfer(req, res, next) {
  Account.createTransfer(req.swagger.params, res, next);
};

module.exports.getAccountHistory = function getAccountHistory(req, res, next) {
  Account.getAccountHistory(req.swagger.params, res, next);
};
