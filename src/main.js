"use strict";

var RequestLike = require("../lib/RequestLike.js");
var Server      = require("./server.js");

var request     = new RequestLike(Server);
var Q           = require("q");
var bluebird    = require("bluebird");

// Example: This one fails because it doesn't retry the request
function getWithoutRetry() {
  return request.get("/api1");
}

// TODO: Fix this implementation to properly retry the request
// There is currently a bug in this implementation
// Implement with either Q or bluebird
function getWithRetry(retryCount) {
  var deferred = Q.defer();
  request.get("/api1").then(function(ret) {
    deferred.resolve(ret);
  }).caught(function(ret) {
    if (!retryCount) {
      deferred.reject(ret);
    } else {
      getWithRetry(retryCount - 1);
    }
  });
  return deferred.promise;
}


module.exports = getWithRetry;
