def lone_sum(a, b, c):
  if(a != b and a != c and b != c): return a + b + c
  elif(a == b and a == c and b == c): return 0
  elif(b == c): return a
  elif(a == b): return c
  elif(a == c): return b
  
  