with open('input.txt', 'r') as file:
    pairs = [list(map(int, line.split())) for line in file]

left_column = [pair[0] for pair in pairs]
right_column = [pair[1] for pair in pairs]

total = 0

for i in range(len(left_column)):
    multiplier = 0
    for j in range(len(right_column)):
        if left_column[i] == right_column[j]:
            multiplier += 1
    total += left_column[i] * multiplier

print(total)
