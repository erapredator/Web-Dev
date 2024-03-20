def string_match(a, b):
    # Determine the length of the shortest string
    min_length = min(len(a), len(b))
    
    # Initialize a counter for the matching substrings
    count = 0
    
    # Iterate over the range up to the length of the shortest string - 1
    for i in range(min_length - 1):
        # Check if the length 2 substrings starting from index i match in both strings
        if a[i:i+2] == b[i:i+2]:
            count += 1
    
    return count

# Test cases
print(string_match('xxcaazz', 'xxbaaz'))  # Output: 3
print(string_match('abc', 'abc'))         # Output: 2
print(string_match('abc', 'axc'))         # Output: 0
