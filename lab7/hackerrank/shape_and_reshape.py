# Enter your code here. Read input from STDIN. Print output to STDOUT
import numpy as np

listt = input().split()

int_listt = [int(x) for x in listt]

np_array = np.array(int_listt)

print(np_array.reshape(3,3))
