"use strict";

var Promise   = require("bluebird");
var Response  = require("./Response.js");

function RequestLike(map) {
  this.map = map;
}

RequestLike.prototype.get = function(path, params) {
  var func = this.map[path];
  return new Promise(function(resolve, reject) {
    if (func) {
      var ret = func(params);
      if (ret.statusCode >= 200 && ret.statusCode <= 300) {
        resolve(ret);
      } else {
        reject(ret);
      }
    } else {
      reject(new Response(404, "Not Found"));
    }
  });
};

module.exports = RequestLike;