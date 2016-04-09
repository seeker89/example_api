var Promise = require("bluebird");
var Moment = require("moment");
var _ = require("lodash");

var logger = require("../libs/logger");
var Account = require("../models/account");

var __store = [];
var counter = 1;
var prefix = "0000000000000";

/*

    This is an in-memory store for the API.

    It's designed to mimic the behaviour of a database-backed,
    asynchronous API.

    We'll use it for testing.


 */

module.exports = {

    create: function(data){

        if (this.validateEntry(data)){
            var entry = {
                name: data.name,
                ownerId: data.ownerId,
                number: (prefix + counter).slice(-prefix.length),
                amount: 0
            }
            __store.push(entry);
            counter++;
            logger.debug("New account has been created", entry);
            return Promise.resolve(new Account(entry));
        }

        return Promise.reject(new Error("Name and ownerId fields are required for creation of a Account"));

    },

    findByOwnerId: function(id){
        var found = _.filter(__store, {"ownerId": id});
        return Promise.resolve(found.map(function(elem){
            return new Account(elem);
        }));
    },

    findByNumber: function(id){
        var result;
        var found = _.find(__store, {"number": id});
        if (found){
            result = new Account(found);
        }
        return Promise.resolve(result);
    },

    validateEntry: function(entry){
        return entry && entry.name && entry.ownerId;
    },


    /*
        For testing, so that we can "reset" the contents of the store
     */
    __store: __store
};



/*

    Prefilling the store with some data to begin with

 */
__store = [
    {
        "number": "1",
        "ownerId": 2,
        "name": "Current Account",
        "amount": 10.20,
    },
    {
        "number": "2",
        "ownerId": 2,
        "name": "Savings Account",
        "amount": 10000.78,
    },
    {
        "number": "3",
        "ownerId": 3,
        "name": "Current Account",
        "amount": -20.99,
    },
];