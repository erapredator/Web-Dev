N = int(input())

array = list(map(int, input().split()))

for i in range(0, N, 1):
    if array[i] > 0:
        print(array[i], end=" ")
