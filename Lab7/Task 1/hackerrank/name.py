def print_full_name(first, last):
    full_name = "Hello {} {}! You just delved into python.".format(first, last)
    print(full_name)

first_name = input()
last_name = input()

print_full_name(first_name, last_name)
