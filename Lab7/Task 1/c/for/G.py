a = int(input())

for i in range(a, 0, -1):
    if a % i == 0 and i > 1:
        print(i)
