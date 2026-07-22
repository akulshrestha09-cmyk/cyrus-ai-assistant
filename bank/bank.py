greeting = input("Greeting: ")
clean_greeting = greeting.strip().lower()
if clean_greeting.startswith("hello"):
    print("$0")
elif clean_greeting.startswith("h"):
    print("$20")
else:
    print("$100")
