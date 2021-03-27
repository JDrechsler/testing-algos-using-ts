# def twoNumSum(array, targetSum):
#     for numInArr in array:
#         for otherNum in array: 
#             if numInArr + otherNum == targetSum and numInArr != otherNum:
#                 print([numInArr, otherNum])
#     return []


def twoNumSum2(array, targetSum):
    nums = {}
    for num in array:
        potentialMatch = targetSum - num
        if potentialMatch in nums:
            return [potentialMatch, num]
        else:
            nums[num] = True
    return []

twoNumSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)