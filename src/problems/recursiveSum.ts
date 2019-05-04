let sum = a => b => (b ? sum(a + b) : a);

console.log(`Sum: `);

// let sum = function(a) {
//     return function(b) {
//         if (b) {
//             return sum(a + b)
//         } else {
//             return a
//         }
//     }
// }
