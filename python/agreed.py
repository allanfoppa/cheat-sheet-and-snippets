res = input('Você concorda? ')

if res.lower() in ["s", "sim"]:
  print('Aceitou')
elif res.lower() in ["n", "nao", "não"]:
  print('Não aceitou')
else:
  print("Não respondeu corretamente")