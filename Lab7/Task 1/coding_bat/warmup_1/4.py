def pos_neg(a, b, negative):
    if a < 0 and b > 0 and negative == "False":
        print("True")
    elif a > 0 and b < 0 and negative == "False":
        print("True")
    elif a < 0 and b < 0 and negative == "True":
        print("True")
    else:
        print("False")

a = int(input())    
b = int(input())
negative = input()
pos_neg(a, b, negative)
