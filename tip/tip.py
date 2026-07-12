def main():
    dollars = dollars_to_float(input("How much was the meal? "))
    percent = percent_to_float(input("What percentage would you like to tip? "))
    tip = dollars * percent
    print(f"Leave ${tip:.2f}")

def dollars_to_float(d):
    # Remove the leading '$' sign and convert to a float
    # d.replace("$", "") removes the dollar sign if present
    return float(d.replace("$", ""))

def percent_to_float(p):
    # Remove the trailing '%' sign, convert to float, and divide by 100
    # e.g., '15%' becomes 15.0, then 0.15
    percentage_value = float(p.replace("%", ""))
    return percentage_value / 100

main()
