var Promise = require("bluebird");
var Moment = require("moment");
var _ = require("lodash");

var Transaction = require("../models/transaction");

var __store = [];
var counter = 0;
var prefix = "0000000000000";

/*

    This is an in-memory store for the API.

    It's designed to mimic the behaviour of a database-backed,
    asynchronous API.

    We'll use it for testing.


 */

module.exports = {

    create: function(data){

    },

    findByAccount: function(id){
        var found = _.filter(__store, function(elem){
            return elem.origin === id || elem.destination === id
        });
        return Promise.resolve(found.map(function(elem){
            return new Transaction(elem);
        }));
    },

    findByOrigin: function(id){
        var found = _.filter(__store, {"origin": id});
        return Promise.resolve(found.map(function(elem){
            return new Transaction(elem);
        }));
    },

    findByDestination: function(id){
        var found = _.filter(__store, {"destination": id});
        return Promise.resolve(found.map(function(elem){
            return new Transaction(elem);
        }));
    },

    validateEntry: function(entry){
        return entry && entry.origin && entry.destination && entry.amount;
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
        "origin": "000001",
        "destination": "000002",
        "executedAt": (new Date()).toISOString(),
        "amount": 1000.20,
    },
    {
        "origin": "000002",
        "destination": "000001",
        "executedAt": (new Date()).toISOString(),
        "amount": 2000.20,
    },
    {
        "origin": "000003",
        "destination": "000004",
        "executedAt": (new Date()).toISOString(),
        "amount": 1.00,
    },
];