'use strict';

var logger = require("../libs/logger");
var ErrorHandler = require("./errors");

var AccountManager = require('../models/account_memory');
var CustomerManager = require('../models/customer_memory');
var TransactionsManager = require('../models/transaction_memory');


module.exports.createAccount = function createAccount(req, res, next) {

    var params = req.swagger.params.body.value;
    var newAccount;

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
        newAccount = account;
        newAccount.amount += params.amount;
        return newAccount.save();
    }).then(function(){
        return TransactionsManager.create({
            origin: "paid-in-cash",
            destination: newAccount.number,
            amount: params.amount
        });
    }).then(function(transaction){
        res.send(newAccount.toObject());
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

/*

    In the real world we would like to wrap this into a transaction.

 */

module.exports.createTransfer = function createTransfer(req, res, next) {

    var params = req.swagger.params.body.value;

    var accountOrigin, accountDestination;
    var transaction;

    AccountManager
    .findByNumber(params.origin.number)
    .then(function(account){
        if (account){
            accountOrigin = account;
            return AccountManager.findByNumber(params.destination.number);
        }
        ErrorHandler.throwNotFound("Origin account not found");
    }).then(function(account){
        if (account){
            accountDestination = account;
            return TransactionsManager.create({
                origin: accountOrigin.number,
                destination: accountDestination.number,
                amount: params.amount
            });
        }
        ErrorHandler.throwNotFound("Destination account not found");
    }).then(function(trans){
        console.log(trans);
        transaction = trans;
        accountOrigin.amount -= params.amount;
        return accountOrigin.save();
    }).then(function(){
        accountDestination.amount += params.amount;
        return accountDestination.save();
    }).then(function(){
        res.send(transaction.toObject());
    }).catch(function(err){
        ErrorHandler.sendError(res, err);
    });


};

module.exports.getAccountHistory = function getAccountHistory(req, res, next) {

    var id = req.swagger.params.accountId.value;
    
    AccountManager
    .findByNumber(id)
    .then(function(account){
        if (account){
            return TransactionsManager
            .findByAccount(account.number)
            .then(function(transactions){
                var output = transactions.map(function(elem){
                    return elem.toObject();
                })
                res.send(output);
            })
        }
        ErrorHandler.throwNotFound("Account not found");
    }).catch(function(err){
        ErrorHandler.sendError(res, err);
    });
};
