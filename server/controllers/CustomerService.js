'use strict';

exports.createCustomer = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (CreateCustomerRequest)
  **/
    var examples = {};
  examples['application/json'] = {
  "created" : (new Date()).toISOString(),
  "name" : "aeiou",
  "id" : "aeiou",
  "accounts" : [ {
    "number" : "aeiou",
    "amount" : 1.3579000000000001069366817318950779736042022705078125
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getCustomer = function(args, res, next) {
  /**
   * parameters expected in the args:
  * customerId (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "created" : (new Date()).toISOString(),
  "name" : "aeiou",
  "id" : "aeiou",
  "accounts" : [ {
    "number" : "aeiou",
    "amount" : 1.3579000000000001069366817318950779736042022705078125
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

