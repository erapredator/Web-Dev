def swap_case(s):
    return ''.join(c.swapcase() for c in s)

s = input()
print(swap_case(s))
