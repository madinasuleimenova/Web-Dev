def caught_speeding(speed, is_birthday):
  if(is_birthday): speed -= 5
  
  if(speed <= 60):
    return 0
  elif(speed >= 61 and speed <= 80):
    return 1
  elif(speed >= 81):
    return 2
  
