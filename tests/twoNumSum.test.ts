import { expect } from "chai";
import * as program from "../src/problems/twoNumSum";

describe("test diff solutions two for loops", () => {
  it("sum equals targetSum", () => {
    expect(program.twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)).to.deep.equal(
      [-1, 11]
    );
  });

  it("returns empty array if nothing found", () => {
    expect(program.twoNumberSum([1, 2, 3], 10)).to.deep.equal([]);
  });
});
