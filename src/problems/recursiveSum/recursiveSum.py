def listsum(numList):
    theSum = 0
    for i in numList:
        theSum = theSum + i
    return theSum

print(listsum([1,3,5,7,9]))


# export const sum = a => b => (b ? sum(a + b) : a);

# export function sum2(a) {
#   return function(b) {
#     if (b) {
#       return sum(a + b);
#     } else {
#       return a;
#     }
#   };
# }

# //tests
# sum(1)(2)(3)(10)() === 16; //?.$
# sum2(1)(2)(3)(10)() === 16; //?.$