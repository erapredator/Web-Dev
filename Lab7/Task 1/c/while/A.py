import math

a = int(input())
num = 1
while num <= a:
    if int(num ** 0.5) ** 2 == num:
        print(num)
    num += 1
