'use strict';

var logger = require("../libs/logger");
var handler = require("./errors");

var CustomerManager = require('../models/customer_memory');
var AccountsManager = require('../models/account_memory');


module.exports.createCustomer = function createCustomer (req, res, next) {

    var name = req.swagger.params.body.value.name;

    CustomerManager.create({
        name: name
    }).then(function(customer){
        res.send(customer.toObject());
    }).catch(function(err){
        handler.send(err);
    });
};

module.exports.getCustomer = function getCustomer (req, res, next) {

    var id = req.swagger.params.customerId.value;
    
    CustomerManager.findById(id)
    .then(function(customer){
        if (!customer){
            handler.notFound(res);
        } else {
            AccountsManager.findByOwnerId(customer.id)
            .then(function(accounts){
                var output = customer.toObject();
                output.accounts = accounts.map(function(elem){
                    return elem.toObject();
                })
                res.send(output);
            })
        }
    }).catch(function(err){
        handler.send(err);
    });
};
