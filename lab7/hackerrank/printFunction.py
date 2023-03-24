def printUntil(num : int):
    for i in range(1,num + 1):
        print(i,end="")

if __name__ == '__main__':
    n = int(input())
    printUntil(n)
    