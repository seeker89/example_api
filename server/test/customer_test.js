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


    describe('#save', function() {

        it('should save things', function(done) {

            var usr;

            var storage = {};
            storage.save = function() {
                return Promise.resolve(usr);
            };

            usr = new Customer(storage);

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
                name: "Donald",
                id: "12346"
            }

            var storage = {};

            var usr = new Customer(storage);
            usr.set("name", values.name);
            usr.set("id", values.id);

            expect(usr.name).to.be.equal(values.name);
            expect(usr.id).to.be.equal(values.id);

            expect(usr.doesntexitst).to.be.equal(undefined);
        });

    });





});
