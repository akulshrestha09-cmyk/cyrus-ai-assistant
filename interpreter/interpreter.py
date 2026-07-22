expression = input("Expression: ")
x_str, y, z_str = expression.split(" ")
x = int(x_str)
z = int(z_str)

if y == "+":
    result = x + z
elif y == "-":
    result = x - z
elif y == "*":
    result = x * z
elif y == "/":
    result = x / z

print(f"{result:.1f}")
