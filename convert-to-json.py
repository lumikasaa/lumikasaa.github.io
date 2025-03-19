

with open('rawdata.txt', 'r') as file:
    c = file.read()
    c = c.split("\n")
    
    d = []

    sum = 0

    for r in c:
        i = [n.rstrip() for n in r.split("\t")]
        i[2] = float(i[2].strip("%"))
        sum = sum + i[2]
        d.append([round(sum,2), i[0], i[1]])

    print("  [")
    for r in d:
        t = "Regular" if r[1] not in ["Lil Nezuko", "Lil Tanjiro", "Lil Zenitsu"] else "Petite Luna"
        print(f'    [{r[0]}, "{r[1].lower().replace(" ", "")}.png", "{r[1]}", "{r[2]}", "{t}"],')
    print("  ]")