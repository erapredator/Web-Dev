def not_string(str):
    for i in str:
        if i == "not":
            return "not " + str
        else:
            return str

str = input()
print(not_string(str))
