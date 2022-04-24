import pkg from "@hediet/debug-visualizer-data-extraction"

pkg.getDataExtractorApi().registerDefaultExtractors()

/*
Visualize this expression:
```ts
hedietDbgVis.markedGrid(
    array,
    hedietDbgVis.tryEval(["i", "j", "left", "right"])
)
```
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  debugger
  // [1, 2, 3]
  for (let i = 0; i < arr1.length; i++) /*?*/ {
    // [4, 1, 9]
    let numArr1 = arr1[i]
    for (let j = 0; j < arr2.length; j++) {
      if (numArr1 /*?*/ ** 2 === arr2[j]) {
        arr2.splice(j, 1)
        //?
      }
    }
  }
  arr1 //?
  arr2 //?
  return arr2.length === 0
}

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     //?
//     return false
//   }
//   debugger
//   for (let i = 0; i < arr1.length; i++ /* [1, 2, 3] */) {
//     let findSquaredIndex = arr2.indexOf(arr1[i] ** 2)
//     if (findSquaredIndex !== -1) {
//       arr2 //?
//       arr2.splice(findSquaredIndex, 1)
//       arr2 //?
//     }
//   }

//   arr1 //?
//   arr2 //?
//   return arr2.length === 0
// }

// Normal tests
same([1, 2, 3], [4, 1, 9]) //?
// same([1, 2, 3], [1, 9]) //?
// same([1, 2, 1], [4, 4, 1]) //?

// // Performance tests
// same([1, 2, 3], [4, 1, 9]) //?.
// same([1, 2, 3], [1, 9]) //?.
// same([1, 2, 1], [4, 4, 1]) //?.
