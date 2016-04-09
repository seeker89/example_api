var request = require('supertest');
var assert = require('chai').assert;
var expect = require('chai').expect;

var init = require("../index")


describe('Integration', function() {

    describe('#account', function() {

        describe('PUT /account', function() {

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

            it('should not create an account for a non-existent user', function(done) {

                var req = {
                    amount: 1001.00,
                    name: "current",
                    customer: {
                        id: "i don't exist"
                    }
                };

                init.then(function(app){

                    request(app)
                        .put('/account')
                        .set('Accept', 'application/json')
                        .send(req)
                        .expect(404)
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





        describe('GET /account', function() {

            it('should get an account for a valid account', function(done) {

                var id = "2";

                init.then(function(app){

                    request(app)
                        .get('/account/' + id)
                        .set('Accept', 'application/json')
                        .expect(200)
                        .expect(function(res) {
                            ["name", "ownerId", "number", "amount"].forEach(function(prop){
                                expect(res.body).to.have.property(prop);
                            });

                            expect(res.body).to.deep.equal({
                                "number": "2",
                                "ownerId": "2",
                                "name": "Savings Account",
                                "amount": 10000.78,
                            });
                        })
                        .end(done)
                });

            });


            it('should return 404 for non existin account', function(done) {

                var id = "doesn't exist";

                init.then(function(app){

                    request(app)
                        .get('/account/' + id)
                        .set('Accept', 'application/json')
                        .expect(404)
                        .end(done)
                });

            });

        });


        describe('GET /account/history', function() {

            it('should get transactions for a valid account', function(done) {

                var id = "2";

                init.then(function(app){

                    request(app)
                        .get('/account/history/' + id)
                        .set('Accept', 'application/json')
                        .expect(200)
                        .expect(function(res) {
                            expect(res.body).to.be.instanceof(Array);
                            expect(res.body.length).to.be.equal(3);
                        })
                        .end(done)
                });

            });


            it('should return 404 for non existing account', function(done) {

                var id = "doesn't exist";

                init.then(function(app){

                    request(app)
                        .get('/account/history/' + id)
                        .set('Accept', 'application/json')
                        .expect(404)
                        .end(done)
                });

            });

        });




        describe('PUT /transfer', function() {


            it('should return 404 for non existing origin account', function(done) {

                var req = {
                    "amount": 401.78,
                    "origin": {
                        "number": "non-existent"
                    },
                    "destination": {
                        "number": "1"
                    }
                }

                init.then(function(app){

                    request(app)
                        .put('/transfer')
                        .send(req)
                        .set('Accept', 'application/json')
                        .expect(404)
                        .end(done)
                });

            });


            it('should return 404 for non existing origin account', function(done) {

                var req = {
                    "amount": 401.78,
                    "origin": {
                        "number": "1"
                    },
                    "destination": {
                        "number": "non-existent"
                    }
                }

                init.then(function(app){

                    request(app)
                        .put('/transfer')
                        .send(req)
                        .set('Accept', 'application/json')
                        .expect(404)
                        .end(done)
                });

            });



            it('should do a transaction properly', function(done) {

                var req = {
                    "amount": 400,
                    "origin": {
                        "number": "transfer_from"
                    },
                    "destination": {
                        "number": "transfer_to"
                    }
                }

                init.then(function(app){

                    request(app)
                        .put('/transfer')
                        .send(req)
                        .set('Accept', 'application/json')
                        .expect(200)
                        .end(function(err, res){

                            request(app)
                                .get('/account/' + req.origin.number)
                                .set('Accept', 'application/json')
                                .expect(200)
                                .end(function(err, res) {
                                    expect(res.body.amount).to.be.equal(600);

                                    request(app)
                                        .get('/account/' + req.destination.number)
                                        .set('Accept', 'application/json')
                                        .expect(200)
                                        .expect(function(res) {
                                            expect(res.body.amount).to.be.equal(400 - 10.5);
                                        })
                                        .end(done)
                                })
                        })
                });

            });

        });

    });

});