a = input()
b = input()
counter = 0
for i in range(a.__len__()):
    if a[i] == b:
        counter+=1
print(counter)