def parrot_trouble(talking, hour):
    # If the parrot is talking and the hour is before 7 or after 20, return True (we are in trouble)
    if talking and (hour < 7 or hour > 20):
        return True
    # Otherwise, return False (we are not in trouble)
    return False

# Test cases
print(parrot_trouble(True, 6))   # Output: True
print(parrot_trouble(True, 7))   # Output: False
print(parrot_trouble(False, 6))  # Output: False
