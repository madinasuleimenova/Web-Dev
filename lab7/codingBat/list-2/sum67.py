def sum67(nums):
  sum = 0
  is_ignored = False
  
  for num in nums:
    if(num == 6):
      is_ignored = True
    elif(num == 7 and is_ignored):
      is_ignored = False
    elif(not is_ignored):
      sum += num
  
  return sum    