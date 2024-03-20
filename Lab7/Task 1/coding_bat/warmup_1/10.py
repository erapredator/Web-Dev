def monkey_trouble(a_smile, b_smile):
    # If both monkeys are smiling or if neither of them is smiling, return True (we are in trouble)
    if (a_smile and b_smile) or (not a_smile and not b_smile):
        return True
    # Otherwise, return False (we are not in trouble)
    return False

# Test cases
print(monkey_trouble(True, True))    # Output: True
print(monkey_trouble(False, False))  # Output: True
print(monkey_trouble(True, False))   # Output: False
