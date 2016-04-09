var Promise = require("bluebird");
var Moment = require("moment");
var _ = require("lodash");

var logger = require("../libs/logger");

/*

    The Customer model.

    Since we're going to have at least two swappable backends (in-memory + db),
    this model will abstract the user manipulations by wrapping the actual data
    in a higher level, nice API.


    params:
        - storage - this will be assumed to be a promised-based storage (save),
                    accepting dot notation for setting and getting properties.



 */
function Customer(storage) {

    if (!storage){
        throw new Error("Cannot instantiate Customer with no underlying storage");
    }

    // save to the database
    this.save = function() {
        return storage.save().then(function() {
            return this;
        }.bind(this));
    }

    // get and update a value
    this.set = function(prop, val) {
        storage[prop] = val;
    };
    this.get = function(prop) {
        return storage[prop];
    };

}


module.exports = Customer;