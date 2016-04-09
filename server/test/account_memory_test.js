var assert = require('chai').assert;
var expect = require('chai').expect;
var Promise = require("bluebird");

var AccountMemory = require("../models/account_memory");


describe('Account in-memory', function() {

    describe('#find', function() {

        it('should find one of the predefined accounts by number', function(done) {

            AccountMemory.findByNumber("1")
                
                .then(function(account){
                    expect(account.name).to.be.equal("Current Account");
                    expect(account.number).to.be.equal("1");
                    expect(account.ownerId).to.be.equal(2);
                    expect(account.amount).to.be.equal(10.20);
                    done();
                })
                .catch(function(err){
                    done(err);
                });

        });

        it('should return undefined for non-existing account', function(done) {

            AccountMemory.findByNumber("300")
                
                .then(function(account){
                    expect(account).to.be.equal(undefined);
                    done();
                })
                .catch(function(err){
                    done(err);
                });

        });

    });


    describe('#find', function() {

        it('should find all accounts of the user', function(done) {

            AccountMemory.findByOwnerId(2)
                
                .then(function(accounts){
                    expect(accounts.map(function(elem){
                        return elem.toObject();
                    })).to.be.deep.equal(
                    [
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
                        }
                    ]
                    );
                    done();
                })
                .catch(function(err){
                    done(err);
                });

        });

        it('should return an empty array for when no accounts found', function(done) {

            AccountMemory.findByOwnerId("300")
                
                .then(function(accounts){
                    expect(accounts).to.be.deep.equal([]);
                    done();
                })
                .catch(function(err){
                    done(err);
                });

        });

    });


    describe('#create', function() {

        it('should create and return a new account with a number', function(done) {

            var Name = "Current";
            var ownerId = 2;

            AccountMemory.create({
                "name": Name,
                "ownerId": ownerId
            }).then(function(account){
                expect(account.name).to.be.equal(Name);
                expect(account.number).to.not.be.equal(undefined);
                expect(account.amount).to.be.equal(0);
                expect(account.ownerId).to.be.equal(ownerId);
                done();
            })
            .catch(function(err){
                done(err);
            });

        });

        it('should create and then find a new account', function(done) {

            var Name = "Another one";
            var ownerId = 2;
            var number;

            AccountMemory.create({
                "name": Name,
                "ownerId": ownerId
            }).then(function(account){
                number = account.number;
                return AccountMemory.findByNumber(number)
            }).then(function(account){
                expect(account.name).to.be.equal(Name);
                expect(account.number).to.not.be.equal(undefined);
                expect(account.amount).to.be.equal(0);
                expect(account.ownerId).to.be.equal(ownerId);
                done();
            })
            .catch(function(err){
                done(err);
            });

        });

    });

});
