var request = require('supertest');
var assert = require('chai').assert;
var expect = require('chai').expect;

var init = require("../index")


describe('Integration', function() {

    describe('#account', function() {

        describe('/account', function() {

            it('should create an account for a valid user', function(done) {

                var req = {
                    amount: 1001.00,
                    name: "current",
                    customer: {
                        id: "1"
                    }
                };

                init.then(function(app){

                    request(app)
                        .put('/account')
                        .set('Accept', 'application/json')
                        .send(req)
                        .expect(200)
                        .expect(function(res) {
                            ["name", "ownerId", "number", "amount"].forEach(function(prop){
                                expect(res.body).to.have.property(prop);
                            });
                        })
                        .end(done)
                });

            });

            it('should not create an account without name', function(done) {

                var req = {
                    amount: 1001.00,
                    customer: {
                        id: "1"
                    }
                };

                init.then(function(app){

                    request(app)
                        .put('/account')
                        .set('Accept', 'application/json')
                        .send(req)
                        .expect(400)
                        .expect(function(res) {
                            expect(res.body).to.have.property("message");
                        })
                        .end(done)
                });

            });

        });

    });

});