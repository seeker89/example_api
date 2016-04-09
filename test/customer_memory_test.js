var assert = require('chai').assert;
var expect = require('chai').expect;
var Promise = require("bluebird");

var CustomerMemory = require("../models/customer_memory");


describe('Customer in-memory', function() {

    describe('#find', function() {

        it('should find one of the predefined customers', function(done) {

            CustomerMemory.findById("3")
                
                .then(function(customer){
                    expect(customer.name).to.be.equal("Heidi Hasselbach");
                    expect(customer.id).to.be.equal("3");
                    done();
                })
                .catch(function(err){
                    done(err);
                });

        });

        it('should return undefined for non-existing customer', function(done) {

            CustomerMemory.findById("300")
                
                .then(function(customer){
                    expect(customer).to.be.equal(undefined);
                    done();
                })
                .catch(function(err){
                    done(err);
                });

        });

    });


    describe('#create', function() {

        it('should create and return a new user with random id', function(done) {

            var Name = "Donald Tr Ump";

            CustomerMemory.create({
                "name": Name
            }).then(function(customer){
                expect(customer.name).to.be.equal(Name);
                expect(customer.id).to.not.be.equal(undefined);
                done();
            })
            .catch(function(err){
                done(err);
            });

        });

        it('should create and then find a new user', function(done) {

            var Name = "Somebody else";
            var id;

            CustomerMemory.create({
                "name": Name
            }).then(function(customer){
                expect(customer.name).to.be.equal(Name);
                expect(customer.id).to.not.be.equal(undefined);
                id = customer.id;
                return CustomerMemory.findById(id)
            }).then(function(customer){
                expect(customer.name).to.be.equal(Name);
                expect(customer.id).to.be.equal(id);
                done();
            })
            .catch(function(err){
                done(err);
            });

        });

        it('should not create without name', function(done) {

            CustomerMemory.create({
            }).then(function(customer){
                done("Didn't reject");
            })
            .catch(function(err){
                expect(err).to.be.instanceof(Error);
                done();
            });

        });

    });

});
