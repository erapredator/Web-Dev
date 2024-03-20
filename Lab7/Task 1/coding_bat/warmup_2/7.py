def array123(nums):
    for i in range(len(nums) - 2):
        if nums[i] == 1 and nums[i + 1] == 2 and nums[i + 2] == 3:
            return True
    return False

array123([1, 2, 3])
s = array123([1, 2, 3])
print(s)