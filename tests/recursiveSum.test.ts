import { expect, assert } from "chai";
import * as program from "../src/problems/recursiveSum";

describe("recursive sum", () => {
  it("sum equals targetSum 10", () => {
    assert.deepEqual(program.sum(1)(2)(3)(4)(), 10);
  });

  it("sum equals targetSum 10", () => {
    assert.deepEqual(program.sum(1)(2)(3)(10)(), 16);
  });
});

describe("recursive sum2", () => {
  it("sum2 equals targetSum 10", () => {
    assert.deepEqual(program.sum2(1)(2)(3)(4)(), 10);
  });

  it("sum2 equals targetSum 10", () => {
    assert.deepEqual(program.sum2(1)(2)(3)(10)(), 16);
  });
});
