def centered_average(nums):
    nums.remove(max(nums))
    nums.remove(min(nums))
    
    total = sum(nums)
    
    num_elements = len(nums)
    
    return total // num_elements