"use strict";

var Response = require("../lib/Response.js");

/**
 * Fail 20% rate
 */
function sometimesFail() {
  var n = Math.floor(Math.random() * 5);
  return n === 0 ? new Response(404, "Not found") : new Response(200, "OK");
}

module.exports = {
  "/api1": sometimesFail
};