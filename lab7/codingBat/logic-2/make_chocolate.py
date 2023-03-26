def make_chocolate(small, big, goal):
    # calculate the maximum number of big bars we can use
    max_big_bars = goal // 5
    if max_big_bars <= big:
        # we have enough big bars, so we use them all
        goal -= max_big_bars * 5
    else:
        # we don't have enough big bars, so we use them all
        goal -= big * 5

    # now we only need to use small bars
    if goal <= small:
        return goal
    else:
        return -1
