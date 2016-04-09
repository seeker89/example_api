'use strict';

var yaml = require('js-yaml');
var fs = require('fs');
var express = require('express');
var swagger = require('swagger-tools');
var bodyParser = require('body-parser');

var logger = require("./libs/logger");

// default environment
process.env.ENV = process.env.ENV || "dev";

var swaggerFile = "../API.yml";
var swaggerUIURL = "/ui";

var app = express();
var swaggerObject = yaml.safeLoad(fs.readFileSync(swaggerFile, 'utf8'));

// Initialize the Swagger Middleware
swagger.initializeMiddleware(swaggerObject, function(middleware) {

    // save the startup time
    app.locals.startup = new Date();

    // use dev logger, apart when running test?
    if (process.env.ENV != "test") {
        app.use(require('morgan')("dev", { "stream": logger.stream }));
    }

    app.use(bodyParser.json({limit: "1mb"}));

    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // We'll skip the api_key policy validation for now
    app.use(middleware.swaggerSecurity(
        {
            "api_key": function(req, authOrSecDef, scopesOrApiKey, callback) {
                callback();
            }
        }
    ));

    // Validate Swagger requests
    app.use(middleware.swaggerValidator({
        validateResponse: true
    }));

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter({
        controllers: './controllers'
    }));

    // Serve the Swagger documents and Swagger UI
    if (process.env.ENV != "prod") {
        app.use(middleware.swaggerUi({
            swaggerUi: swaggerUIURL,
            apiDocs: "/def"
        }));
    }

    // handle uncaught errors
    app.use(function(err, req, res, next) {

        // validation errors
        if (err.failedValidation){
            res.status(400);
            res.send({
                message: err.code,
                error: process.env.ENV === "prod" ? err.message : JSON.stringify(err),
                code: 400
            });
        } else {
            res.status(err.status || err.code || 500);
            res.send({
                message: err.message,
                error: process.env.ENV === "prod" ? err.message : JSON.stringify(err),
                code: err.code
            });
        }
    });

    var port = process.env.PORT || 3000;
    logger.debug(process.env);

    // serve on the port
    logger.info("Serving the app at 0.0.0.0/" + port);
    logger.info("UI at http://localhost:" + port + swaggerUIURL);
    app.listen(port);
});


module.exports = app; // for running tests
