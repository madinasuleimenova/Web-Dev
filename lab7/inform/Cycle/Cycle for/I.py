n = int(input())
number = 1
cnt = 0

if n == 1:
    cnt=1;
else:
    cnt=2
    for i in range(2, int((n/2)+1)):
        if n % i == 0:
            cnt +=1

print (cnt)

