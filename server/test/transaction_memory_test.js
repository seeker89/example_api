var assert = require('chai').assert;
var expect = require('chai').expect;
var Promise = require("bluebird");
var _ = require("lodash");

var TransactionMemory = require("../models/transaction_memory");


describe('Transaction in-memory', function() {

    describe('#find', function() {

        it('should find all transactions from account', function(done) {

            var origin = "000001";
            var destination = "000002";

            TransactionMemory.findByOrigin(origin)
                
                .then(function(transactions){
                    expect(transactions).to.be.an.array();
                    expect(transactions.length).to.be.equal(1);
                    var transaction = transactions[0];
                    expect(transaction.amount).to.be.equal(1000);
                    expect(transaction.destination).to.be.equal(destination);
                    done();
                })
                .catch(function(err){
                    done(err);
                });

        });

        it('should find all transactions to account', function(done) {

            var origin = "000001";
            var destination = "000002";

            TransactionMemory.findByDestination(destination)
                
                .then(function(transactions){
                    expect(transactions).to.be.an.array();
                    expect(transactions.length).to.be.equal(1);
                    var transaction = transactions[0];
                    expect(transaction.amount).to.be.equal(1000);
                    expect(transaction.origin).to.be.equal(origin);
                    done();
                })
                .catch(function(err){
                    done(err);
                });

        });


        it('should find all transactions about account', function(done) {

            var account = "000002";

            TransactionMemory.findByAccount(account)
                
                .then(function(transactions){
                    expect(transactions).to.be.an.array();
                    expect(transactions.length).to.be.equal(2);

                    var transaction = transactions[0];
                    expect(transaction.amount).to.be.equal(1000);
                    expect(transaction.origin).to.be.equal(origin);

                    transaction = transactions[1];
                    expect(transaction.amount).to.be.equal(1000);
                    expect(transaction.origin).to.be.equal(origin);


                    done();
                })
                .catch(function(err){
                    done(err);
                });

        });

        it('should return empty array when no transactions', function(done) {

            TransactionMemory.findByAccount("non-existing")
                
                .then(function(transactions){
                    expect(transactions).to.be.deep.equal([]);
                    done();
                })
                .catch(function(err){
                    done(err);
                });

        });

    });


    describe('#create', function() {

        it('should create and return a new transaction', function(done) {

            var origin = "000001";
            var destination = "000002";
            var amount = 1230.89;

            TransactionMemory.create({
                "origin": origin,
                "destination": destination,
                "amount": amount
            }).then(function(transaction){
                expect(transaction.origin).to.be.equal(origin);
                expect(transaction.destination).to.be.equal(destination);
                expect(transaction.amount).to.be.equal(amount);
                done();
            })
            .catch(function(err){
                done(err);
            });

        });

        it('should create and then find a new user', function(done) {

            var origin = "000001";
            var destination = "000002";
            var amount = 1230.89;

            TransactionMemory.create({
                "origin": origin,
                "destination": destination,
                "amount": amount
            }).then(function(transaction){
                return TransactionMemory.findByAccount(origin);
            }).then(function(transactions){
                var predicate = {origin: origin, destination: destination, amount: amount};
                var found = _.find(transactions.map(function(elem){
                    return elem.toObject()
                }), predicate);
                expect(found).to.be.deep.equal(predicate);
                done();
            })
            .catch(function(err){
                done(err);
            });

        });

    });

});
