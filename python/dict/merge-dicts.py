
x_values = {
  'a': 1,
  'b': 2
}

y_values = {
  'b': 3,
  'c': 4
}

# Will remove duplicated keys
z_is_x_and_y_merge = {**x_values, **y_values}
print(z_is_x_and_y_merge)
