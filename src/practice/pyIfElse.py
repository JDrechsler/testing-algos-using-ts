import math
import os
import random
import re
import sys

def printWeird(n):
    if n % 2 != 0: 
        print("Weird")
    else:
        if n % 2 == 0 and n in range(2,5):
            print("Not Weird")
        elif n in range(6,20):
            print("Weird")
        elif n > 20:
            print("Not Weird")

n = 3
printWeird(n)




# If  is odd, print Weird
# If  is even and in the inclusive range of  to , print Not Weird
# If  is even and in the inclusive range of  to , print Weird
# If  is even and greater than , print Not Weird
