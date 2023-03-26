def centered_average(nums):
  maxx = nums[0]
  minn = nums[0]
  summ = nums[0]
  
  for i in range(len(nums)):
    maxx = max(maxx, nums[i])
    minn = min(minn, nums[i])
    summ += nums[i]
  
  summ -= maxx
  summ -= minn
  
  res = summ / (len(nums) - 2)
  
  return res
