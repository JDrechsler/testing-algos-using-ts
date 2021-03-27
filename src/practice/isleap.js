// def is_leap(year):
//     leap = False

//     if year % 4 == 0:
//         leap = True
//         if year % 100 == 0:
//             leap = False
//             if year % 400 == 0:
//                 leap = True

//     return leap

function isLeap(year) {
  let leap = false;
  if (year % 4 === 0) {
    leap = true;
    if (year % 100 === 0) {
      leap = false;
      if (year % 400 === 0) {
        leap = true;
      }
    }
  }
}
