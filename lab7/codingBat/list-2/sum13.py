def sum13(nums):
  if len(nums) == 0: return 0
  
  sum = 0
  is_ignored = False
  
  for num in nums:
    if(num != 13 and not is_ignored):
      sum += num
    
    if(is_ignored):
      is_ignored = False
    
    if(num == 13):
      is_ignored = True
      
    
  
  return sum