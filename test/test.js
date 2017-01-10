'use strict';

let assert = require('assert');
let readline = require('..');
let fs = require('fs');

describe("ES6 readline for Hackerrank", () => {
  it("reads lines", function(done) {
    readline.readLines(fs.createReadStream("test/test.txt"), function* () {
      try {
        assert.equal(yield, "test");
        assert.equal(yield, "line2");
        assert.equal(yield, "long line with blanks");
        assert.equal(yield, "some utf8 символы");
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});
