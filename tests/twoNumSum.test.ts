import { expect, assert } from "chai";
import * as program from "../src/problems/twoNumSum/twoNumSum";

describe("test with two for loops", () => {
  it("sum equals targetSum", () => {
    assert.deepEqual(program.twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10), [
      -1,
      11
    ]);
  });

  it("returns empty array if nothing found", () => {
    assert.deepEqual(program.twoNumberSum([1, 2, 3], 10), []);
  });
});

describe("tests with LR pointers ", () => {
  it("sum equals targetSum", () => {
    expect(
      program.twoNumberSumLR([3, 5, -4, 8, 11, 1, -1, 6], 10)
    ).to.deep.equal([-1, 11]);
  });

  it("returns empty array if nothing found", () => {
    expect(program.twoNumberSumLR([1, 2, 3], 10)).to.deep.equal([]);
  });
});

describe("tests with hash table", () => {
  it("sum equals targetSum", () => {
    expect(
      program.twoNumberSumHash([3, 5, -4, 8, 11, 1, -1, 6], 10)
    ).to.deep.equal([-1, 11]);
  });

  it("returns empty array if nothing found", () => {
    expect(program.twoNumberSumHash([1, 2, 3], 10)).to.deep.equal([]);
  });
});
