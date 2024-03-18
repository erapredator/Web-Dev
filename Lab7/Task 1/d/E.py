N = int(input())

array = list(map(int, input().split()))
flag = "NO"
for i in range(N - 1): 
    if array[i+1] == array[i]:
        flag = "YES"
        print(flag)
        break
    else:
        print(flag)

