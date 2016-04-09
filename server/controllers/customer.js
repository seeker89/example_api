'use strict';

var url = require('url');


var Customer = require('./CustomerService');


module.exports.createCustomer = function createCustomer (req, res, next) {
  Customer.createCustomer(req.swagger.params, res, next);
};

module.exports.getCustomer = function getCustomer (req, res, next) {
  Customer.getCustomer(req.swagger.params, res, next);
};
