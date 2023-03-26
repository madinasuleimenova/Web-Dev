def make_bricks(small, big, goal):
    small_len = small * 1
    big_len = big * 5
    overall_len = small_len + big_len
  
    if big_len >= goal:
        return True
  
    if overall_len < goal:
        return False
  
    if big_len > goal:
        if goal % 5 <= small:
            return True
  
    if big_len < goal:
        if big_len + small >= goal:
            return True
  
    return False
