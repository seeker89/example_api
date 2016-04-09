var request = require('supertest');
var assert = require('chai').assert;
var expect = require('chai').expect;

var init = require("../index")


describe('Integration', function() {

    describe('#customer', function() {

        describe('PUT /customer', function() {

            it('should create an customer for a valid user', function(done) {

                var req = {
                    name: "current"
                };

                init.then(function(app){

                    request(app)
                        .put('/customer')
                        .set('Accept', 'application/json')
                        .send(req)
                        .expect(200)
                        .expect(function(res) {
                            ["name", "id"].forEach(function(prop){
                                expect(res.body).to.have.property(prop);
                            });
                        })
                        .end(done)
                });

            });

            it('should not create a customer without name', function(done) {

                var req = {
                    amount: 1001.00,
                };

                init.then(function(app){

                    request(app)
                        .put('/customer')
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





        describe('GET /customer', function() {

            it('should get an customer for a valid customer id', function(done) {

                var id = "2";

                init.then(function(app){

                    request(app)
                        .get('/customer/' + id)
                        .set('Accept', 'application/json')
                        .expect(200)
                        .expect(function(res) {
                            ["id", "name"].forEach(function(prop){
                                expect(res.body).to.have.property(prop);
                            });

                            expect(res.body).to.deep.equal({
                                "id": "2",
                                "name": "Michael Li"
                            });
                        })
                        .end(done)
                });

            });


            it('should return 404 for non existing id', function(done) {

                var id = "doesn't exist";

                init.then(function(app){

                    request(app)
                        .get('/customer/' + id)
                        .set('Accept', 'application/json')
                        .expect(404)
                        .end(done)
                });

            });

        });

    });

});