def string_bites(str):
    if len(str) <= 1:
        return str
    else:
        for i in range(len(str)):
            if i % 2 != 0:
                print(str[i], end="")

s =  input()
string_bites(s)