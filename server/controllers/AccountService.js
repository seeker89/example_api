'use strict';

exports.createAccount = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (CreateAccountRequest)
  **/
    var examples = {};
  examples['application/json'] = {
  "created" : new Date(),
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

exports.createTransfer = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (CreateTransferRequest)
  **/
    var examples = {};
  examples['application/json'] = {
  "amount" : 1.3579000000000001069366817318950779736042022705078125,
  "executedAt" : new Date(),
  "from" : {
    "number" : "aeiou"
  },
  "to" : ""
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getAccount = function(args, res, next) {
  /**
   * parameters expected in the args:
  * accountId (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "number" : "aeiou",
  "amount" : 1.3579000000000001069366817318950779736042022705078125
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}


exports.createTransfer = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (CreateTransferRequest)
  **/
    var examples = {};
  examples['application/json'] = {
  "amount" : 1.3579000000000001069366817318950779736042022705078125,
  "executedAt" : new Date(),
  "origin" : {
    "number" : "aeiou"
  },
  "destination" : {
    "number" : "aeiou"
  }
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getAccountHistory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * accountId (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "transactions" : [ {
    "amount" : 1.3579000000000001069366817318950779736042022705078125,
    "executedAt" : new Date(),
    "origin" : {
      "number" : "aeiou"
    },
    "destination" : {
      "number" : "aeiou"
    }
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

