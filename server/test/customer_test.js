var assert = require('chai').assert;
var expect = require('chai').expect;
var Promise = require("bluebird");

var Customer = require("../models/customer");


describe('Customer', function() {

    describe('#constructor', function() {

        it('should not accept no storage', function() {

            expect(function(){
                new Customer(undefined);
            }).to.throw(RangeError);

        });

    });

    describe('#get & set', function() {

        it('should get and set things', function() {

            var storage = {};

            var usr = new Customer(storage);
            usr.set("name", "Donald");

            expect(storage).to.have.property("name");

            expect(usr.get("name")).to.be.equal("Donald");
            expect(storage.name).to.be.equal("Donald");

            usr.set("name", "Duck");

            expect(usr.get("name")).to.be.equal("Duck");
            expect(storage.name).to.be.equal("Duck");

        });

    });

});
