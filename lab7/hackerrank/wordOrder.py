# Enter your code here. Read input from STDIN. Print output to STDOUT
dictt = {}
numOfWords = int(input())
while(numOfWords > 0):
    word = input()
    if word in dictt:
        dictt[word] = dictt[word] + 1
    elif word not in dictt:
        dictt[word] = 1    
    numOfWords = numOfWords - 1

print(len(dictt))

for value in dictt.values():
    print(value,end=" ")