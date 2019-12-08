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
sum(1)(2)(3)(10)() === 16; //?.$
sum2(1)(2)(3)(10)() === 16; //?.$
