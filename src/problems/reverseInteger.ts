function reverseInteger(num: number) {
  let result = 0; //?
  let remaining = num; //?

  while (remaining !== 0) {
    /*?remaining*/ result; //?
    remaining; //?

    result = result * 10; //?
    result = result + (remaining % 10); //?

    remaining = Math.trunc(remaining / 10); //?
  } // trunc is used since there is no integer type for JS / TS

  return result; //?
}

//Test Cases
// reverseInteger(18) === 81; //?
reverseInteger(234) === 432; //?
// reverseInteger(-67) === -76 //?
// reverseInteger(7654) === 4567 //?
// reverseInteger(1) === 1 //?
// reverseInteger(-13) === -31 //?
// reverseInteger(0) === 0 //?
