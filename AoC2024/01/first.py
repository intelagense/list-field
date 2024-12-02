with open('input.txt', 'r') as file:
    pairs = [list(map(int, line.split())) for line in file]

left_column = sorted(pair[0] for pair in pairs)
right_column = sorted(pair[1] for pair in pairs)

total = sum(abs(left_column[i] - right_column[i])
            for i in range(len(left_column)))

print(total)
