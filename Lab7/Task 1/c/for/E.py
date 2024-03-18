a = input()
counter = 0
for i in range(a.__len__()):
    int_a = int(a[i])
    counter += int_a
print(counter)