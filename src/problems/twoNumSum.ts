/**
 * @time O(n^2)
 * @space O(1)
 */
export function twoNumberSum(array: Array<number>, targetSum: number) {
  for (var i = 0; i < array.length; i++) {
    var currNum = array[i];
    for (var k = 0; k < array.length; k++) {
      var compNum = array[k];
      if (compNum !== currNum) {
        if (currNum + compNum === targetSum) {
          var solution = [currNum, compNum].sort((a, b) => a - b);
          return solution;
        }
      }
    }
  }
  return [];
}

/**
 * @time O(nlog(n))
 * @space O(1)
 */
export function twoNumberSumLR(array: Array<number>, targetSum: number) {
  array.sort((a, b) => a - b);
  var left = 0;
  var right = array.length - 1;

  while (left < right) {
    var currSum = array[left] + array[right];

    if (currSum === targetSum) {
      return [array[left], array[right]];
    } else if (currSum < targetSum) {
      left++;
    } else if (currSum > targetSum) {
      right--;
    }
  }
  return [];
}

/**
 * @time O(n)
 * @space O(n)
 */
export function twoNumberSumHash(array: Array<number>, targetSum: number) {
  const nums = {};

  for (var num of array) {
    var potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      var solution = [potentialMatch, num].sort((a, b) => a - b);
      return solution;
    } else {
      nums[num] = num;
    }
  }
  return [];
}
