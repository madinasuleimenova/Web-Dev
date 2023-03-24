n = int(input())
number = 1
while number <= n:
    if n % number == 0:
        print(number, end=" ")
    number += 1

