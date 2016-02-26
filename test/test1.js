"use strict";

var assert   = require("chai").assert;
var Promise  = require("bluebird");
var api1     = require("../src/main.js");

describe("Call api1", function() {
  it("without retry succeed more than 70%", function() {
    let success = 0;
    let array = [];
    for (let i=0; i<100; i++) {
      const promise = new Promise(function(resolve, reject) {
        api1().then(function(ret) {
          success++;
          resolve(ret);
        }).catch(function(ret) {
          resolve(ret);
        });
      });
      array.push(promise);
    }
    return Promise.all(array).then(function() {
      console.log("success = " + success);
      assert(success !== 100, "Without retry never becomes 100%");
      assert(success > 70, "Without retry should success more than 70%");
    });
  });

  it("without retry 100 times succeed 100%", function() {
    let success = 0;
    let array = [];
    for (let i=0; i<100; i++) {
      const promise = new Promise(function(resolve, reject) {
        api1(100).then(function(ret) {
          success++;
          resolve(ret);
        }).catch(function(ret) {
          resolve(ret);
        });
      });
      array.push(promise);
    }
    return Promise.all(array).then(function() {
      console.log("success = " + success);
      assert(success === 100, "With retry should success 100%");
    });
  });
});