var request = require('supertest');
var assert = require('chai').assert;
var expect = require('chai').expect;

var init = require("../index")


describe('Integration', function() {

    describe('#debug', function() {

        describe('/', function() {

            it('should give running stats', function(done) {

                init.then(function(app){

                    request(app)
                        .get('/')
                        .set('Accept', 'application/json')
                        .expect(function(res) {
                            expect(res.body).to.have.property("uptime");
                            expect(res.body).to.have.property("startup");
                            expect(res.body).to.have.property("state");

                            expect(res.body.uptime).to.be.a("Number");
                        })
                        .end(done)
                });
            });

        });

    });

});