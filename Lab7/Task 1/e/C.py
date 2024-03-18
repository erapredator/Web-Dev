def boolean_Xor(a, b):
    if a == b:
        return 0
    else:
        return 1
    
a,b = map(int, input().split())
print(boolean_Xor(a,b))