'use strict';

var logger = require("../libs/logger");
var ErrorHandler = require("./errors");

var CustomerManager = require('../models/customer_memory');
var AccountsManager = require('../models/account_memory');


/*

    Create a customer account

    https://example-api-bank.herokuapp.com/ui/#!/customer/createCustomer

 */

module.exports.createCustomer = function createCustomer (req, res, next) {

    var name = req.swagger.params.body.value.name;

    CustomerManager.create({
        name: name
    }).then(function(customer){
        res.send(customer.toObject());
    }).catch(function(err){
        ErrorHandler.sendError(res, err);
    });
};


/*

    Get customer by their id.
    It contains a list of their accounts,

    https://example-api-bank.herokuapp.com/ui/#!/customer/getCustomer

 */

module.exports.getCustomer = function getCustomer (req, res, next) {

    var id = req.swagger.params.customerId.value;
    
    CustomerManager.findById(id)
    .then(function(customer){
        if (customer){
            return AccountsManager
            .findByOwnerId(customer.id)
            .then(function(accounts){
                var output = customer.toObject();
                output.accounts = accounts.map(function(elem){
                    return elem.toObject();
                })
                res.send(output);
            })
        }
        ErrorHandler.throwNotFound("Customer not found");
    }).catch(function(err){
        ErrorHandler.sendError(res, err);
    });
};
