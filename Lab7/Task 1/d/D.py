N = int(input())

array = list(map(int, input().split()))
counter = 0
for i in range(N - 1): 
    if array[i+1] > array[i]:
        counter += 1
print(counter)
