var assert = require('chai').assert;
var expect = require('chai').expect;
var Promise = require("bluebird");

var Account = require("../models/Account");


describe('Account', function() {

    describe('#constructor', function() {

        it('should not accept no storage', function() {

            expect(function(){
                new Account(undefined);
            }).to.throw(RangeError);

        });

    });

    describe('#get & set', function() {

        it('should get and set things', function() {

            var storage = {};

            var usr = new Account(storage);
            usr.set("name", "Current Account");

            expect(storage).to.have.property("name");

            expect(usr.get("name")).to.be.equal("Current Account");
            expect(storage.name).to.be.equal("Current Account");

            usr.set("name", "Savings Account");

            expect(usr.get("name")).to.be.equal("Savings Account");
            expect(storage.name).to.be.equal("Savings Account");

        });

    });


    describe('#save', function() {

        it('should save things', function(done) {

            var usr;

            var storage = {};
            storage.save = function() {
                return Promise.resolve(usr);
            };

            usr = new Account(storage);

            usr.save()
                .then(function(u){
                    assert(u === usr)
                    done();
                })
                .catch(function(err){
                    done(err);
                });
        });

    });


    describe('#dot notation', function() {

        it('should work like a charm', function() {

            var values = {
                name: "Current Account",
                number: "curr-12346",
                ownerId: "1"
            }

            var storage = {};

            var usr = new Account(storage);
            usr.set("name", values.name);
            usr.set("number", values.number);
            usr.set("ownerId", values.ownerId);

            expect(usr.name).to.be.equal(values.name);
            expect(usr.number).to.be.equal(values.number);
            expect(usr.ownerId).to.be.equal(values.ownerId);

            expect(usr.doesntexitst).to.be.equal(undefined);
        });

    });

   describe('#toObject', function() {

        it('should work like a charm', function() {
            var storage = {};
            var usr = new Account(storage);
            expect(usr.toObject()).to.be.deep.eql(storage);
        });

    });





});
