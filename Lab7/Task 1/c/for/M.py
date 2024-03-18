a = int(input())
nulls = 0
for i in range(a):
    num =  int(input())
    if num == 0:
        nulls += 1
print(nulls)