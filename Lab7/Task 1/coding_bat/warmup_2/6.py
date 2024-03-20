def array_count9(nums):
    count = 0
    for i in nums:
        if i == 9:
            count += 1
    return count

numbers = [1, 9, 9, 3, 9, 5]
result = array_count9(numbers)
print(result)  
