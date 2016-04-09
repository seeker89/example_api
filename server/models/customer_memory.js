var Promise = require("bluebird");
var Moment = require("moment");
var _ = require("lodash");

var Customer = require("../models/customer");

var __store;

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
                id: (new Date()).getTime().toString()
            }
            __store.push(entry);
            entry.save = Promise.resolve(entry);
            return Promise.resolve(new Customer(entry));
        }

        return Promise.reject(new Error("Name field is required for creation of a Customer"));
    },

    findById: function(id){
        var result;
        var found = _.find(__store, {"id": id});
        if (found){
            result = new Customer(found);
        }
        return Promise.resolve(result);
    },

    validateEntry: function(entry){
        return entry && entry.name;
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
        "id": "1",
        "name": "Jane Woods"
    },
    {
        "id": "2",
        "name": "Michael Li"
    },
    {
        "id": "3",
        "name": "Heidi Hasselbach"
    },
    {
        "id": "4",
        "name": "Rahul Pour"
    }
];