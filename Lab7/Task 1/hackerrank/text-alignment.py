# Read the thickness value for the logo
thickness = int(input())

# Top Cone
for i in range(thickness):
    print((('.|.' * i) + '.|.' + ('.|.' * i)).center(thickness * 3, '-'))

# Welcome Message
print('WELCOME'.center(thickness * 3, '-'))

# Bottom Cone
for i in range(thickness - 1, -1, -1):
    print((('.|.' * i) + '.|.' + ('.|.' * i)).center(thickness * 3, '-'))
