import math

a = int(input())
num = 2
while num <= a:
    if a % num == 0:
        print(num)
        break
    num += 1
