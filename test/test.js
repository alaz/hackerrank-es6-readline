'use strict';

let assert = require('assert');
let readline = require('..');
let fs = require('fs');

describe("ES6 readline for Hackerrank", () => {
  it("pass something", () => {
    let rl = readline.readLine(fs.createReadStream("test.txt"));
    assert.equal(rl.next().value, "test");
    assert.equal(rl.next().done, true);
  });
});
