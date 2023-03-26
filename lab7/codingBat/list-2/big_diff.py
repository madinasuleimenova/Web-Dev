def big_diff(nums):
  maxx = nums[0]
  minn = nums[0]
  
  for i in range(1,len(nums)):
    maxx = max(maxx,nums[i])
    minn = min(minn,nums[i])
  
  return maxx - minn  