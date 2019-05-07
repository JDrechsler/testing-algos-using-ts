export const sum = a => b => (b ? sum(a + b) : a);

export function sum2(a) {
  return function(b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
}

//tests
console.log(sum(1)(2)(3)(10)());
console.log(sum2(1)(2)(3)(10)());
