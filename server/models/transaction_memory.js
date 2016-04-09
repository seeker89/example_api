var Promise = require("bluebird");
var Moment = require("moment");
var _ = require("lodash");

var Transaction = require("../models/transaction");
var wrap = require("../libs/mem_wrapper");

var __store = [];

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
                origin: data.origin,
                destination: data.destination,
                amount: data.amount,
                executedAt: (new Date()).toISOString()
            }
            __store.push(entry);
            return Promise.resolve(new Transaction(wrap(entry)));
        }

        return Promise.reject(new Error("Name field is required for creation of a Transaction"));
    },

    findByAccount: function(id){
        var found = _.filter(__store, function(elem){
            return elem.origin === id || elem.destination === id
        });
        return Promise.resolve(found.map(function(elem){
            return new Transaction(wrap(elem));
        }));
    },

    findByOrigin: function(id){
        var found = _.filter(__store, {"origin": id});
        return Promise.resolve(found.map(function(elem){
            return new Transaction(wrap(elem));
        }));
    },

    findByDestination: function(id){
        var found = _.filter(__store, {"destination": id});
        return Promise.resolve(found.map(function(elem){
            return new Transaction(wrap(elem));
        }));
    },

    validateEntry: function(entry){
        return entry && entry.origin && entry.destination && (entry.amount || entry.amount === 0);
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
    {
        "origin": "1",
        "destination": "2",
        "executedAt": (new Date()).toISOString(),
        "amount": 1.00,
    },
    {
        "origin": "2",
        "destination": "1",
        "executedAt": (new Date()).toISOString(),
        "amount": 1222.00,
    },
    {
        "origin": "3",
        "destination": "2",
        "executedAt": (new Date()).toISOString(),
        "amount": 77.00,
    },
];