import "../styles.css";
import * as TwoNumSum from "./problems/twoNumSum";

console.log(
  `Two number sum using two for loops`,
  TwoNumSum.twoNumberSum([1, 2, 3, 4, 5, 6, 7, 10], 10)
);

console.log(
  `Two number sum using LR pointers`,
  TwoNumSum.twoNumberSumLR([1, 2, 3, 4, 5, 6, 7, 12, 16], 12)
);

console.log(
  `Two number sum using hash table`,
  TwoNumSum.twoNumberSumHash([3, 5, -4, 8, 11, 1, -1, 6], 10)
);
