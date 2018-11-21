# HealthCheckMiddleware

An Express Middleware to implement HealthCheck customizable apis

## How to

The implementation of HealthCheckMiddleware is quite easy, just as one of another middleware used in Express.
This is an example of an ExpressServer.

```javascript
const express = require("express");
const app = express();
const router = express.Router({
  caseSensitive: app.get("case sensitive routing"),
  strict: app.get("strict routing")
});
const healthMiddleware = require("./lib/HealthCheck");

//init middlewares and routers

router.use("/test", this.testRouter);
app.use("/v1", router);
app.use(healthMiddleware());

module.exports = app;
//you can call it without parameters, or it accepts 3 parameters:
//1.    customRoutes -> defined as array or single statement (ie. ["/test","/testing", "/testingz"] or "/testinging")
//                        default are : ["/health", "/healthz", "/healthcheck"]
//2.    methods -> defined as array os single statement   (ie ["post", "put", "options"])
//                  default are: ["get", "head"]
//3.    jsonMessage -> defined as a json object (next implementation will provide XML and HTML response)
//                  default is {message : "OK"}
```

##	ToDos

The next implementation allows you to customize the response in different formats.
