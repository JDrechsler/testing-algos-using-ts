def is_leap(year):
    leap = False
    
    if year % 4 == 0:
        leap = True
        if year % 100 == 0:
            leap = False
            if year % 400 == 0:
                leap = True

    return leap

for i in range(2000,2030+1):
    if is_leap(i):
        print(i, is_leap(i))
    
