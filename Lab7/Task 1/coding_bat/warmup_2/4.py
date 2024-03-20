def string_splosion(str):
    s = ""
    for i in range(len(str) + 1):
        s += str[:i]
    print(s)

s = input()
string_splosion(s)