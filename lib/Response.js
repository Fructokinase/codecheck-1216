"use strict";

function Response(statusCode, body) {
  this.statusCode = statusCode;
  this.body = body;
}

module.exports = Response;