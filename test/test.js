'use strict';

import {readLine} from '../src/readline';
let assert = require('assert');

describe("ES6 readline for Hackerrank", () => {
  let readline = readLine(process.stdin);

  it("pass something", () => {
    assert.equal(true, true);
  });
});
