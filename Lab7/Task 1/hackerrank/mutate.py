def mutate_string(s, position, character):
    before = s[:position]
    after = s[position + 1:]
    mutated_string = before + character + after
    return mutated_string

s = input()
position, character = input().split()
position = int(position)


result = mutate_string(s, position, character)
print(result)
