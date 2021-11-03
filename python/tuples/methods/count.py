

def main():
  t = (1, 2, 'three', 1)
  count_el_tuple(t)

def count_el_tuple(t):
  l = t.count(1)
  print(l)

main()