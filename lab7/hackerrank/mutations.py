def mutate_string(string, position, character):
    listt = list(string)
    listt[position] = character
    res = ''.join(listt)
    return res

if __name__ == '__main__':
    s = input()
    i, c = input().split()
    s_new = mutate_string(s, int(i), c)
    print(s_new)