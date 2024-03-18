a= int(input())
for i in range(a, 0, -1):
    if a[i] % i == 0:
        div = a[i]
        if a[i] % i != 0:
            print(div)
            break