var Promise = require("bluebird");
var Moment = require("moment");
var _ = require("lodash");

var Account = require("../models/account");

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

    },

    findByOrigin: function(id){

    },

    findByDestination: function(id){

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