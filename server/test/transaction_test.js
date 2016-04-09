var assert = require('chai').assert;
var expect = require('chai').expect;
var Promise = require("bluebird");

var Transaction = require("../models/transaction");


describe('Transaction', function() {

    describe('#constructor', function() {

        it('should not accept no storage', function() {

            expect(function(){
                new Transaction(undefined);
            }).to.throw(RangeError);

        });

    });

    describe('#get & set', function() {

        it('should get and set things', function() {

            var storage = {};
            var origin1 = "0000012301203123";
            var origin2 = "0000012301203123";

            var usr = new Transaction(storage);
            usr.set("origin", origin1);

            expect(storage).to.have.property("origin");

            expect(usr.get("origin")).to.be.equal(origin1);
            expect(storage.origin).to.be.equal(origin1);

            usr.set("origin", origin2);

            expect(usr.get("origin")).to.be.equal(origin2);
            expect(storage.origin).to.be.equal(origin2);

        });

    });


    describe('#save', function() {

        it('should save things', function(done) {

            var usr;

            var storage = {};
            storage.save = function() {
                return Promise.resolve(usr);
            };

            usr = new Transaction(storage);

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
                origin: "Current Transaction",
                destination: "curr-12346",
                executedAt: (new Date()).toISOString(),
                amount: 777.22
            }

            var storage = {};

            var usr = new Transaction(storage);
            usr.set("origin", values.origin);
            usr.set("destination", values.destination);
            usr.set("executedAt", values.executedAt);
            usr.set("amount", values.amount);

            expect(usr.origin).to.be.equal(values.origin);
            expect(usr.destination).to.be.equal(values.destination);
            expect(usr.executedAt).to.be.equal(values.executedAt);
            expect(usr.amount).to.be.equal(values.amount);

            expect(usr.doesntexitst).to.be.equal(undefined);
        });

    });

   describe('#toObject', function() {

        it('should work like a charm', function() {
            var storage = {};
            var usr = new Transaction(storage);
            expect(usr.toObject()).to.be.deep.eql(storage);
        });

    });





});
