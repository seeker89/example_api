var assert = require('chai').assert;
var expect = require('chai').expect;
var Promise = require("bluebird");

var CustomerMemory = require("../models/customer_memory");


describe('Customer', function() {

    describe('#find', function() {

        it('should find one of the predefined customers', function(done) {

            CustomerMemory.findById(3)
                
                .then(function(customer){
                    expect(customer.name).to.be.equal("Heidi Hasselbach");
                    expect(customer.id).to.be.equal(3);
                    done();
                })
                .catch(function(err){
                    done(err);
                });

        });

        it('should return undefined for non-existing customer', function(done) {

            CustomerMemory.findById(300)
                
                .then(function(customer){
                    expect(customer).to.be.equal(undefined);
                    done();
                })
                .catch(function(err){
                    done(err);
                });

        });

    });

});
