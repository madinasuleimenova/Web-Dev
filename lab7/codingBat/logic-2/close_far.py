def close_far(a, b, c):
    # Check if b is close to a and c is far from a and b
    if abs(a - b) <= 1 and abs(b - c) >= 2 and abs(a - c) >= 2:
        return True
    # Check if c is close to a and b is far from a and c
    elif abs(a - c) <= 1 and abs(b - c) >= 2 and abs(a - b) >= 2:
        return True
    else:
        return False
